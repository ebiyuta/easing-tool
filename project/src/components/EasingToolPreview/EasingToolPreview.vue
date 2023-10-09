<script setup lang="ts">
import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import { PointPixelToPercent } from '@/utils/PointPixelToPercent'

interface Props {
  /** 始点ハンドルの座標 */
  startHandle: { x: number; y: number }
  /** 終点ハンドルの座標 */
  endHandle: { x: number; y: number }
}
const props = defineProps<Props>()

// アニメーション実行中かどうか
const isAnimating = ref(false)
const isAnimatingFinish = ref(false)

// 親から受け取った座標をcubicBezier形式に変換
const cubicBezier = computed(() => {
  return `cubic-bezier(${PointPixelToPercent(props.startHandle.x, 'x')}, ${PointPixelToPercent(
    props.startHandle.y,
    'y'
  )}, ${PointPixelToPercent(props.endHandle.x, 'x')}, ${PointPixelToPercent(
    props.endHandle.y,
    'y'
  )})`
})

// タイムアウトのIDを保持する変数
let timeoutId = null
let timeoutId2 = null

watch(cubicBezier, () => {
  isAnimating.value = false
  isAnimatingFinish.value = false
  // すでにタイムアウトがセットされている場合はクリア
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  if (timeoutId2) {
    clearTimeout(timeoutId2)
  }

  // ハンドルの変更が落ち着くのを待ってアニメーションを発火する
  timeoutId = setTimeout(() => {
    isAnimating.value = true
  }, 200)
  timeoutId2 = setTimeout(() => {
    isAnimatingFinish.value = true
  }, 1500)
})
</script>

<template>
  <div class="EasingToolPreview p-4">
    <div
      v-show="!isAnimatingFinish"
      :class="`w-5 h-5 bg-[#9034AA] rounded-full ${
        isAnimating ? 'duration-1000 translate-x-[218px]' : 'translate-x-0'
      }`"
      :style="{ transitionTimingFunction: cubicBezier }"
    />
    <div
      :class="`EasingToolPreview_afterimage ${isAnimating ? 'isAnimating' : ''}`"
      :style="{ transitionTimingFunction: cubicBezier }"
    >
      <div
        class="opacity-10 w-5 h-5 bg-[#9034AA] rounded-full"
        :style="{ animationTimingFunction: cubicBezier }"
        v-for="n in 20"
        :key="n"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes anim {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(218px);
  }
}

.EasingToolPreview {
  position: relative;
  &_afterimage {
    position: absolute;
    width: 0;
    top: 16px;
    height: 20px;
    overflow: hidden;
    &.isAnimating {
      transition: width 1s;
      width: 240px;
    }

    > div {
      position: absolute;
      // 残像表現の為の処理
      // TODO: 強めなイージングの際に、残像の出現アニメーションが不完全なので要対応
      @for $i from 1 through 20 {
        &:nth-of-type(#{$i}) {
          animation: anim 1s;
          animation-delay: #{-$i / 20}s;
          animation-play-state: paused;
        }
      }
    }
  }
}
</style>
