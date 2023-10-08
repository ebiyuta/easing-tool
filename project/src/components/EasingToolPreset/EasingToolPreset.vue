<script setup lang="ts">
import { computed } from 'vue'
import {
  EASE_IN_END_POINT,
  EASE_IN_OUT_END_POINT,
  EASE_IN_OUT_START_POINT,
  EASE_IN_START_POINT,
  EASE_OUT_END_POINT,
  EASE_OUT_START_POINT,
  LINEAR_END_POINT,
  LINEAR_START_POINT
} from '@/consts/EasingPreset'
import { PresetList } from '@/consts/PresetList'

interface Props {
  /** 始点ハンドルの座標 */
  startHandle: { x: number; y: number }
  /** 終点ハンドルの座標 */
  endHandle: { x: number; y: number }
}
const props = defineProps<Props>()

const currentPreset = computed(() => {
  return PresetList.find(
    (item) =>
      item.startHandle.x === props.startHandle.x &&
      item.startHandle.y === props.startHandle.y &&
      item.endHandle.x === props.endHandle.x &&
      item.endHandle.y === props.endHandle.y
  )
})

// 始点/終点ハンドルの座標を変更するためのemit
const emit = defineEmits<{
  (e: 'changeHandle', x1: number, y1: number, x2: number, y2: number): void
}>()

/**
 * linearをハンドルに反映する処理
 */
const changeLinear = () => {
  emit(
    'changeHandle',
    LINEAR_START_POINT.x,
    LINEAR_START_POINT.y,
    LINEAR_END_POINT.x,
    LINEAR_END_POINT.y
  )
}

/**
 * ease-in-outをハンドルに反映する処理
 */
const changeEaseInOut = () => {
  emit(
    'changeHandle',
    EASE_IN_OUT_START_POINT.x,
    EASE_IN_OUT_START_POINT.y,
    EASE_IN_OUT_END_POINT.x,
    EASE_IN_OUT_END_POINT.y
  )
}

/**
 * ease-inをハンドルに反映する処理
 */
const changeEaseIn = () => {
  emit(
    'changeHandle',
    EASE_IN_START_POINT.x,
    EASE_IN_START_POINT.y,
    EASE_IN_END_POINT.x,
    EASE_IN_END_POINT.y
  )
}

/**
 * ease-outをハンドルに反映する処理
 */
const easeOut = () => {
  emit(
    'changeHandle',
    EASE_OUT_START_POINT.x,
    EASE_OUT_START_POINT.y,
    EASE_OUT_END_POINT.x,
    EASE_OUT_END_POINT.y
  )
}
</script>

<template>
  <div class="EasingToolPreset flex h-full flex-col justify-between pl-4">
    <button
      :class="`w-12 h-12 flex items-center justify-center rounded transition-colors ${
        currentPreset && currentPreset.category === 'linear'
          ? 'bg-blue-500'
          : 'hover:bg-gray-300 bg-gray-200'
      }`"
      @click="changeLinear"
    >
      <img
        :class="`w-10 h-10 ${
          currentPreset && currentPreset.category === 'linear' && 'brightness-0 invert'
        }`"
        src="@/assets/linear.svg"
        alt="linear"
      />
    </button>
    <button
      :class="`w-12 h-12 flex items-center justify-center rounded transition-colors ${
        currentPreset && currentPreset.category === 'ease-in-out'
          ? 'bg-blue-500'
          : 'hover:bg-gray-300 bg-gray-200'
      }`"
      @click="changeEaseInOut"
    >
      <img
        :class="`w-10 h-10 ${
          currentPreset && currentPreset.category === 'ease-in-out' && 'brightness-0 invert'
        }`"
        src="@/assets/easeInOut.svg"
        alt="EaseInOut"
      />
    </button>
    <button
      :class="`w-12 h-12 flex items-center justify-center rounded transition-colors ${
        currentPreset && currentPreset.category === 'ease-in'
          ? 'bg-blue-500'
          : 'hover:bg-gray-300 bg-gray-200'
      }`"
      @click="changeEaseIn"
    >
      <img
        :class="`w-10 h-10 ${
          currentPreset && currentPreset.category === 'ease-in' && 'brightness-0 invert'
        }`"
        src="@/assets/fastOutLinearIn.svg"
        alt="FastOutLinearIn"
      />
    </button>
    <button
      :class="`w-12 h-12 flex items-center justify-center rounded transition-colors ${
        currentPreset && currentPreset.category === 'ease-out'
          ? 'bg-blue-500'
          : 'hover:bg-gray-300 bg-gray-200'
      }`"
      @click="easeOut"
    >
      <img
        :class="`w-10 h-10 ${
          currentPreset && currentPreset.category === 'ease-out' && 'brightness-0 invert'
        }`"
        src="@/assets/easeOut.svg"
        alt="easeOut"
      />
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
