<script setup lang="ts">
import { computed } from 'vue'
import { CurrentPresetName } from '@/components/utils/CurrentPresetName'
import { PointPixelToPercent } from '@/utils/PointPixelToPercent'

interface Props {
  /** 始点ハンドルの座標 */
  startHandle: { x: number; y: number }
  /** 終点ハンドルの座標 */
  endHandle: { x: number; y: number }
}
const props = defineProps<Props>()

const currentPreset = computed(() => {
  return CurrentPresetName(props.startHandle, props.endHandle)
})

const cubicBezier = computed(() => {
  return `cubic-bezier(${PointPixelToPercent(props.startHandle.x, 'x')}, ${PointPixelToPercent(
    props.startHandle.y,
    'y'
  )}, ${PointPixelToPercent(props.endHandle.x, 'x')}, ${PointPixelToPercent(
    props.endHandle.y,
    'y'
  )})`
})

/**
 * 前へボタンが押下された時の処理
 */
const prevSlide = () => {
  console.log(cubicBezier)
}

/**
 * 次へボタンが押下された時の処理
 */
const nextSlide = () => {}
</script>

<template>
  <div class="EasingToolSlider flex justify-between p-4">
    <button
      v-show="currentPreset"
      @click="prevSlide"
      class="w-5 h-5 bg-zinc-100 bg-center bg-no-repeat bg-arrow indent-[100%] overflow-hidden rounded-full"
    >
      前へ
    </button>
    <p v-show="currentPreset" class="text-xs text-center">
      {{ currentPreset }}
    </p>
    <p v-show="!currentPreset" class="text-xs mx-auto">
      {{ cubicBezier }}
    </p>
    <button
      v-show="currentPreset"
      @click="nextSlide"
      class="w-5 h-5 bg-zinc-100 bg-center bg-no-repeat bg-arrow indent-[100%] overflow-hidden rounded-full rotate-180"
    >
      次へ
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
