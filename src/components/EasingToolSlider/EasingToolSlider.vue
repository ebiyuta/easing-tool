<script setup lang="ts">
import { computed } from 'vue'
import { PointPixelToPercent } from '@/utils/PointPixelToPercent'
import type { currentPresetType } from '@/types/currentPresetType'

interface Props {
  /** 始点ハンドルの座標 */
  startHandle: { x: number; y: number }
  /** 終点ハンドルの座標 */
  endHandle: { x: number; y: number }
  /** 現在のプリセット */
  currentPreset: currentPresetType | undefined
  /** スライダーの状態 */
  currentSlideList: { category: string; index: number }[]
}
const props = defineProps<Props>()

// 始点/終点ハンドルの座標を変更するためのemit
const emit = defineEmits<{
  (e: 'changeSlide', version: 'next' | 'prev'): void
}>()

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

/**
 * 前へボタンが押下された時の処理
 */
const prevSlide = () => {
  emit('changeSlide', 'prev')
}

/**
 * 次へボタンが押下された時の処理
 */
const nextSlide = () => {
  emit('changeSlide', 'next')
}
</script>

<template>
  <div class="EasingToolSlider flex justify-between p-4 select-none">
    <button
      v-show="props.currentPreset"
      @click="prevSlide"
      class="w-5 h-5 bg-zinc-100 bg-center bg-no-repeat bg-arrow indent-[100%] overflow-hidden rounded-full"
    >
      前へ
    </button>
    <p v-show="props.currentPreset" class="text-xs text-center">
      {{ props.currentPreset && props.currentPreset.displayName }}
    </p>
    <p v-show="!props.currentPreset" class="text-xs mx-auto">
      {{ cubicBezier }}
    </p>
    <button
      v-show="props.currentPreset"
      @click="nextSlide"
      class="w-5 h-5 bg-zinc-100 bg-center bg-no-repeat bg-arrow indent-[100%] overflow-hidden rounded-full rotate-180"
    >
      次へ
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
