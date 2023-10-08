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

watch(cubicBezier, () => {
  isAnimating.value = false
  // すでにタイムアウトがセットされている場合はクリア
  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  // ハンドルの変更が落ち着くのを待ってアニメーションを発火する
  timeoutId = setTimeout(() => {
    isAnimating.value = true
  }, 200)
})
</script>

<template>
  <div class="EasingToolPreview p-4">
    <div
      :class="`w-5 h-5 bg-[#9034AA] rounded-full ${
        isAnimating ? 'duration-1000 translate-x-[218px]' : 'translate-x-0'
      }`"
      :style="{ transitionTimingFunction: cubicBezier }"
    ></div>
  </div>
</template>

<style scoped lang="scss"></style>
