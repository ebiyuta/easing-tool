<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { calculateDistance } from '@/utils/calculateDistance'
import { END_POINT, START_POINT } from '@/consts/Coordinate'
interface Props {
  /** 始点ハンドルの座標 */
  startHandle: { x: number; y: number }
  /** 終点ハンドルの座標 */
  endHandle: { x: number; y: number }
}
const props = defineProps<Props>()

// 始点/終点ハンドルの座標を変更するためのemit
const emit = defineEmits<{
  (e: 'changeStartHandle', x: number, y: number): void
  (e: 'changeEndHandle', x: number, y: number): void
}>()

// SVGタグのDOM要素
const wrapperRef = ref<SVGElement | null>(null)

onMounted(() => {
  // svgタグのDOM取得
  const wrapperDom = wrapperRef.value

  if (!wrapperDom) {
    // 型ガード
    return
  }

  // クリック開始座標
  let clickStartPoint = {
    x: 0,
    y: 0
  }

  // クリック開始時段階の始点ハンドルの座標
  let currentHandle = {
    x: 0,
    y: 0
  }

  const moveHandle = (e: MouseEvent, isNearStart: boolean) => {
    /**
     * ハンドルのX座標を計算します。（現在のハンドル座標 - 移動距離）
     * 移動距離の計算は、クリック開始地点 - 現在のマウス座標。
     * X座標のみ左右の移動制限があります。
     */
    const x = computed(() => {
      if (currentHandle.x - (clickStartPoint.x - e.clientX) < START_POINT.x) {
        return START_POINT.x
      } else if (currentHandle.x - (clickStartPoint.x - e.clientX) > END_POINT.x) {
        return END_POINT.x
      } else {
        return currentHandle.x - (clickStartPoint.x - e.clientX)
      }
    })

    /**
     * ハンドルのY座標を計算します。（現在のハンドル座標 - 移動距離）
     */
    const y = computed(() => currentHandle.y - (clickStartPoint.y - e.clientY))

    if (isNearStart) {
      // 始点ハンドルに計算結果を反映
      emit('changeStartHandle', x.value, y.value)
    } else {
      // 終点ハンドルに計算結果を反映
      emit('changeEndHandle', x.value, y.value)
    }
  }

  wrapperDom.onmousedown = (e: MouseEvent) => {
    // クリック開始座標をブラウザ全体を起点に取得
    clickStartPoint.x = e.clientX
    clickStartPoint.y = e.clientY
    // クリック開始座標をSVGタグを起点に取得
    currentHandle.x = e.offsetX
    currentHandle.y = e.offsetY

    // クリック位置と始点、終点の距離を比較しどちらが近いかを判定
    const startHandleDistance = calculateDistance(currentHandle, props.startHandle)
    const endHandleDistance = calculateDistance(currentHandle, props.endHandle)
    const isNearStart = startHandleDistance < endHandleDistance

    if (isNearStart) {
      // クリック開始座標を始点ハンドルに反映
      emit('changeStartHandle', e.offsetX, e.offsetY)
    } else {
      // クリック開始座標を終点ハンドルに反映
      emit('changeEndHandle', e.offsetX, e.offsetY)
    }

    /**
     * ドラッグ中の処理をまとめたハンドラー
     * @param e
     */
    const clickHandler = (e: MouseEvent) => {
      moveHandle(e, isNearStart)
    }

    // ドラッグ中に行う処理
    document.addEventListener('mousemove', clickHandler)

    // ドラッグ終了時に行う処理
    document.onmouseup = () => {
      document.removeEventListener('mousemove', clickHandler)
    }
  }
})
</script>

<template>
  <div class="EasingToolBody">
    <svg
      ref="wrapperRef"
      class="ml-auto"
      width="148"
      height="248"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- 背景のリニアを表す補助線 -->
      <line
        :x1="START_POINT.x"
        :y1="START_POINT.y"
        :x2="END_POINT.x"
        :y2="END_POINT.y"
        fill="none"
        stroke="#DFE1E5"
        stroke-width="2"
        stroke-linecap="round"
      />

      <!-- イージングの強度を示すベジェ曲線 -->
      <path
        :d="`M ${START_POINT.x} ${START_POINT.y} C ${props.startHandle.x} ${props.startHandle.y}, ${props.endHandle.x} ${props.endHandle.y} ${END_POINT.x} ${END_POINT.y}`"
        stroke="black"
        stroke-width="4"
        fill="transparent"
        stroke-linecap="round"
      />
      <!-- 始点とハンドルを繋ぐ補助線 -->
      <line
        :x1="START_POINT.x"
        :y1="START_POINT.y"
        :x2="props.startHandle.x"
        :y2="props.startHandle.y"
        fill="none"
        stroke="#9034AA"
        stroke-width="2"
        opacity="0.8"
      />
      <!-- 終点とハンドルを繋ぐ補助線 -->
      <line
        :x1="END_POINT.x"
        :y1="END_POINT.y"
        :x2="props.endHandle.x"
        :y2="props.endHandle.y"
        fill="none"
        stroke="#9034AA"
        stroke-width="2"
        opacity="0.8"
      />
      <!-- 始点のハンドル -->
      <circle :cx="props.startHandle.x" :cy="props.startHandle.y" r="8" fill="#9034AA" />
      <!-- 終点のハンドル -->
      <circle :cx="props.endHandle.x" :cy="props.endHandle.y" r="8" fill="#9034AA" />
    </svg>
  </div>
</template>

<style scoped lang="scss"></style>
