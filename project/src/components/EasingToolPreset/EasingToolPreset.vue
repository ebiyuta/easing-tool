<script setup lang="ts">
// 始点/終点ハンドルの座標を変更するためのemit
const emit = defineEmits<{
  (e: 'changeHandleCubicBezier', x1: number, y1: number, x2: number, y2: number): void
}>()

/**
 * linearをハンドルに反映する処理
 * 0.0, 0.0, 1.0, 1.0
 */
const changeLinear = () => {
  emit('changeHandleCubicBezier', 0, 0, 1, 1)
}

/**
 * ease-in-outをハンドルに反映する処理
 * 0.42, 0, 0.58, 1.0
 */
const changeEaseInOut = () => {
  emit('changeHandleCubicBezier', 0.42, 0, 0.58, 1)
}

/**
 * fast-out-linear-inをハンドルに反映する処理
 * 0.4, 0, 1, 1
 */
const changeFastOutLinearIn = () => {
  emit('changeHandleCubicBezier', 0.4, 0, 1, 1)
}

/**
 * ease-outをハンドルに反映する処理
 * 0, 0, 0.58, 1.0
 */
const easeOut = () => {
  emit('changeHandleCubicBezier', 0, 0, 0.58, 1)
}
</script>

<template>
  <div class="EasingToolPreset flex h-full flex-col justify-between items-center">
    <button
      class="w-12 h-12 bg-gray-200 flex items-center justify-center rounded hover:bg-gray-300 transition-colors"
      @click="changeLinear"
    >
      <img class="w-10 h-10" src="@/assets/linear.svg" alt="linear" />
    </button>
    <button
      class="w-12 h-12 bg-gray-200 flex items-center justify-center rounded hover:bg-gray-300 transition-colors"
      @click="changeEaseInOut"
    >
      <img class="w-10 h-10" src="@/assets/easeInOut.svg" alt="EaseInOut" />
    </button>
    <button
      class="w-12 h-12 bg-gray-200 flex items-center justify-center rounded hover:bg-gray-300 transition-colors"
      @click="changeFastOutLinearIn"
    >
      <img class="w-10 h-10" src="@/assets/fastOutLinearIn.svg" alt="FastOutLinearIn" />
    </button>
    <button
      class="w-12 h-12 bg-gray-200 flex items-center justify-center rounded hover:bg-gray-300 transition-colors"
      @click="easeOut"
    >
      <img class="w-10 h-10" src="@/assets/easeOut.svg" alt="easeOut" />
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
