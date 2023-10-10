<script setup lang="ts">
import type { currentPresetType } from '@/types/currentPresetType'
import { PresetList } from '@/consts/PresetList'

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
  (e: 'changeHandle', x1: number, y1: number, x2: number, y2: number): void
}>()

/**
 * スライダーの状況とクリックしたカテゴリーを照らし合わせ、適切なプリセットを呼び出す
 * @param category
 */
const currentPreset = (category: string) => {
  // スライダーの状態から、現在のインデックスを取得
  const currentIndex = props.currentSlideList.find((item) => item.category === category)?.index
  if (currentIndex === undefined) {
    // 型ガード
    return
  }
  // プリセット一覧から、現在のベジェ曲線に対応するカテゴリーのみを絞り込み
  const currentCategoryPresetList = PresetList.filter((item) => item.category === category)
  return currentCategoryPresetList[currentIndex]
}

/**
 * linearをハンドルに反映する処理
 */
const changeLinear = () => {
  const current = currentPreset('linear')
  if (!current) {
    return
  }

  emit(
    'changeHandle',
    current.startHandle.x,
    current.startHandle.y,
    current.endHandle.x,
    current.endHandle.y
  )
}

/**
 * ease-in-outをハンドルに反映する処理
 */
const changeEaseInOut = () => {
  const current = currentPreset('ease-in-out')
  if (!current) {
    return
  }

  emit(
    'changeHandle',
    current.startHandle.x,
    current.startHandle.y,
    current.endHandle.x,
    current.endHandle.y
  )
}

/**
 * ease-inをハンドルに反映する処理
 */
const changeEaseIn = () => {
  const current = currentPreset('ease-in')
  if (!current) {
    return
  }

  emit(
    'changeHandle',
    current.startHandle.x,
    current.startHandle.y,
    current.endHandle.x,
    current.endHandle.y
  )
}

/**
 * ease-outをハンドルに反映する処理
 */
const easeOut = () => {
  const current = currentPreset('ease-out')
  if (!current) {
    return
  }

  emit(
    'changeHandle',
    current.startHandle.x,
    current.startHandle.y,
    current.endHandle.x,
    current.endHandle.y
  )
}
</script>

<template>
  <div class="EasingToolPreset flex h-full flex-col justify-between pl-4 select-none">
    <button
      :class="`w-12 h-12 flex items-center justify-center rounded transition-colors ${
        props.currentPreset && props.currentPreset.category === 'linear'
          ? 'bg-blue-500'
          : 'hover:bg-gray-300 bg-gray-200'
      }`"
      @click="changeLinear"
    >
      <img
        :class="`w-10 h-10 ${
          props.currentPreset && props.currentPreset.category === 'linear' && 'brightness-0 invert'
        }`"
        src="@/assets/linear.svg"
        alt="linear"
      />
    </button>
    <button
      :class="`w-12 h-12 flex items-center justify-center rounded transition-colors ${
        props.currentPreset && props.currentPreset.category === 'ease-in-out'
          ? 'bg-blue-500'
          : 'hover:bg-gray-300 bg-gray-200'
      }`"
      @click="changeEaseInOut"
    >
      <img
        :class="`w-10 h-10 ${
          props.currentPreset &&
          props.currentPreset.category === 'ease-in-out' &&
          'brightness-0 invert'
        }`"
        src="@/assets/easeInOut.svg"
        alt="EaseInOut"
      />
    </button>
    <button
      :class="`w-12 h-12 flex items-center justify-center rounded transition-colors ${
        props.currentPreset && props.currentPreset.category === 'ease-in'
          ? 'bg-blue-500'
          : 'hover:bg-gray-300 bg-gray-200'
      }`"
      @click="changeEaseIn"
    >
      <img
        :class="`w-10 h-10 ${
          props.currentPreset && props.currentPreset.category === 'ease-in' && 'brightness-0 invert'
        }`"
        src="@/assets/fastOutLinearIn.svg"
        alt="FastOutLinearIn"
      />
    </button>
    <button
      :class="`w-12 h-12 flex items-center justify-center rounded transition-colors ${
        props.currentPreset && props.currentPreset.category === 'ease-out'
          ? 'bg-blue-500'
          : 'hover:bg-gray-300 bg-gray-200'
      }`"
      @click="easeOut"
    >
      <img
        :class="`w-10 h-10 ${
          props.currentPreset &&
          props.currentPreset.category === 'ease-out' &&
          'brightness-0 invert'
        }`"
        src="@/assets/easeOut.svg"
        alt="easeOut"
      />
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
