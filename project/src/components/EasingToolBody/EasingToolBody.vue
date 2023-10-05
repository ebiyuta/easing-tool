<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'

// 始点の座標
const START_POINT = {
  x: 10,
  y: 185
}
// 終点の座標
const END_POINT = {
  x: 137,
  y: 50
}
// 始点ハンドルの座標
const startHandle = reactive({
  x: 74,
  y: 185
})
// 終点ハンドルの座標
const endHandle = reactive({
  x: 74,
  y: 50
})

const wrapperRef = ref<SVGElement | null>(null)

/**
 * 二点間の距離を求める関数です。
 * @param point1
 * @param point2
 * @see https://lab.syncer.jp/Web/JavaScript/Snippet/34/
 */
const calculateDistance = (point1: { x: number; y: number }, point2: { x: number; y: number }) => {
  const dx = point2.x - point1.x
  const dy = point2.y - point1.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  return distance
}

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
      startHandle.x = x.value
      startHandle.y = y.value
    } else {
      // 終点ハンドルに計算結果を反映
      endHandle.x = x.value
      endHandle.y = y.value
    }
  }

  wrapperDom.onmousedown = (e: MouseEvent) => {
    // クリック開始座標をブラウザ全体を起点に取得
    clickStartPoint.x = e.clientX
    clickStartPoint.y = e.clientY
    // クリック開始座標をSVGタグを起点に取得
    currentHandle.x = e.offsetX
    currentHandle.y = e.offsetY

    const startHandleDistance = calculateDistance(currentHandle, startHandle)
    const endHandleDistance = calculateDistance(currentHandle, endHandle)
    const isNearStart = startHandleDistance < endHandleDistance
    if (isNearStart) {
      // クリック開始座標を始点ハンドルに反映
      startHandle.x = e.offsetX
      startHandle.y = e.offsetY
    } else {
      // クリック開始座標を終点ハンドルに反映
      endHandle.x = e.offsetX
      endHandle.y = e.offsetY
    }

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
        :d="`M ${START_POINT.x} ${START_POINT.y} C ${startHandle.x} ${startHandle.y}, ${endHandle.x} ${endHandle.y} ${END_POINT.x} ${END_POINT.y}`"
        stroke="black"
        stroke-width="4"
        fill="transparent"
        stroke-linecap="round"
      />
      <!-- 始点とハンドルを繋ぐ補助線 -->
      <line
        :x1="START_POINT.x"
        :y1="START_POINT.y"
        :x2="startHandle.x"
        :y2="startHandle.y"
        fill="none"
        stroke="#9034AA"
        stroke-width="2"
        opacity="0.8"
      />
      <!-- 終点とハンドルを繋ぐ補助線 -->
      <line
        :x1="END_POINT.x"
        :y1="END_POINT.y"
        :x2="endHandle.x"
        :y2="endHandle.y"
        fill="none"
        stroke="#9034AA"
        stroke-width="2"
        opacity="0.8"
      />
      <!-- 始点のハンドル -->
      <circle :cx="startHandle.x" :cy="startHandle.y" r="8" fill="#9034AA" />
      <!-- 終点のハンドル -->
      <circle :cx="endHandle.x" :cy="endHandle.y" r="8" fill="#9034AA" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.EasingToolBody {
}
</style>
