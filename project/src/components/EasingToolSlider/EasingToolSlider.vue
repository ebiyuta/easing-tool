<script setup lang="ts">
import { computed, ref } from 'vue'
import { PointPixelToPercent } from '@/utils/PointPixelToPercent'
import { PresetList } from '@/consts/PresetList'

interface Props {
  /** 始点ハンドルの座標 */
  startHandle: { x: number; y: number }
  /** 終点ハンドルの座標 */
  endHandle: { x: number; y: number }
}
const props = defineProps<Props>()

// 始点/終点ハンドルの座標を変更するためのemit
const emit = defineEmits<{
  (e: 'changeHandle', x1: number, y1: number, x2: number, y2: number): void
}>()

// 親から受け取った座標と完全に一致するプリセットをプリセットリストから見つける
const currentPreset = computed(() =>
  PresetList.find(
    (item) =>
      item.startHandle.x === props.startHandle.x &&
      item.startHandle.y === props.startHandle.y &&
      item.endHandle.x === props.endHandle.x &&
      item.endHandle.y === props.endHandle.y
  )
)

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

// スライダーの状態管理
const currentSlideList = ref([
  {
    category: 'linear',
    index: 0
  },
  {
    category: 'ease-in-out',
    index: 0
  },
  {
    category: 'ease-in',
    index: 0
  },
  {
    category: 'ease-out',
    index: 0
  }
])

/**
 * スライダーの前へ/次へボタンが押された時の処理
 * @param version
 */
const changeSlide = (version: 'next' | 'prev') => {
  const currentCategoryPresetList = PresetList.filter(
    (item) => item.category === currentPreset.value.category
  )

  currentSlideList.value = currentSlideList.value.map((slide) => {
    if (slide.category === currentPreset.value.category) {
      if (version === 'next') {
        return {
          category: slide.category,
          index: slide.index === currentCategoryPresetList.length - 1 ? 0 : slide.index + 1
        }
      } else {
        return {
          category: slide.category,
          index: slide.index === 0 ? currentCategoryPresetList.length - 1 : slide.index - 1
        }
      }
    } else {
      return {
        category: slide.category,
        index: slide.index
      }
    }
  })

  const currentCategoryIndex = currentSlideList.value.find(
    (slide) => slide.category === currentPreset.value.category
  )?.index
  const currentSlide = currentCategoryPresetList[currentCategoryIndex]

  emit(
    'changeHandle',
    currentSlide.startHandle.x,
    currentSlide.startHandle.y,
    currentSlide.endHandle.x,
    currentSlide.endHandle.y
  )
}

/**
 * 前へボタンが押下された時の処理
 */
const prevSlide = () => {
  changeSlide('prev')
}

/**
 * 次へボタンが押下された時の処理
 */
const nextSlide = () => {
  changeSlide('next')
}
</script>

<template>
  <div class="EasingToolSlider flex justify-between p-4 select-none">
    <button
      v-show="currentPreset"
      @click="prevSlide"
      class="w-5 h-5 bg-zinc-100 bg-center bg-no-repeat bg-arrow indent-[100%] overflow-hidden rounded-full"
    >
      前へ
    </button>
    <p v-show="currentPreset" class="text-xs text-center">
      {{ currentPreset && currentPreset.displayName }}
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
