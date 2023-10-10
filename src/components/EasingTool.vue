<script setup lang="ts">
import EasingToolBody from '@/components/EasingToolBody/EasingToolBody.vue'
import EasingToolPreset from '@/components/EasingToolPreset/EasingToolPreset.vue'
import EasingToolSlider from '@/components/EasingToolSlider/EasingToolSlider.vue'
import EasingToolPreview from '@/components/EasingToolPreview/EasingToolPreview.vue'
import { onMounted, reactive, ref, computed } from 'vue'
import { PresetList } from '@/consts/PresetList'
import type { currentPresetType } from '@/types/currentPresetType'

// 始点ハンドルの座標
const startHandle = reactive({
  x: 74,
  y: 185
})
// 終点ハンドルの座標
const endHandle = reactive({
  x: 74,
  y: 51
})
// 完全に一致する完全に一致するプリセットをプリセットリストから見つけるをプリセットリストから見つける
const currentPreset = computed<currentPresetType | undefined>(() =>
  PresetList.find(
    (item) =>
      item.startHandle.x === startHandle.x &&
      item.startHandle.y === startHandle.y &&
      item.endHandle.x === endHandle.x &&
      item.endHandle.y === endHandle.y
  )
)
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
 * 始点ハンドルの座標を変更します。
 * @param x
 * @param y
 */
const changeStartHandle = (x: number, y: number) => {
  startHandle.x = x
  startHandle.y = y
}

/**
 * 終点ハンドルの座標を変更します。
 * @param x
 * @param y
 */
const changeEndHandle = (x: number, y: number) => {
  endHandle.x = x
  endHandle.y = y
}

/**
 * 始点/終点ハンドルの座標を一度に変更します。
 * @param x1 始点ハンドルのx座標
 * @param y1 始点ハンドルのy座標
 * @param x2 終点ハンドルのx座標
 * @param y2　終点ハンドルのy座標
 */
const changeHandle = (x1: number, y1: number, x2: number, y2: number) => {
  changeStartHandle(x1, y1)
  changeEndHandle(x2, y2)
}

const changeSlide = (version: 'next' | 'prev') => {
  const currentPresetValue = currentPreset.value
  if (!currentPresetValue) {
    // 型ガード
    return
  }
  // プリセット一覧から、現在のベジェ曲線に対応するカテゴリーのみを絞り込み
  const currentCategoryPresetList = PresetList.filter(
    (item) => item.category === currentPresetValue.category
  )

  // スライダーの状態を変更する。現在のカテゴリーを元に、各カテゴリーのインデックスを変更します。
  currentSlideList.value = currentSlideList.value.map((slide) => {
    if (slide.category === currentPresetValue.category) {
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

  // 変更後のスライダー状態を元にカテゴリーのインデックスを取得
  const currentCategoryIndex = currentSlideList.value.find(
    (slide) => slide.category === currentPresetValue.category
  )?.index
  if (currentCategoryIndex === undefined) {
    // 型ガード
    return
  }
  // 現在のスライドの座標を取得
  const currentSlide = currentCategoryPresetList[currentCategoryIndex]

  // 座標の更新
  changeHandle(
    currentSlide.startHandle.x,
    currentSlide.startHandle.y,
    currentSlide.endHandle.x,
    currentSlide.endHandle.y
  )
}

onMounted(() => {
  // ハンドルへ初期値の設定
  changeHandle(74, 185, 74, 50)
})
</script>

<template>
  <div class="EasingTool">
    <div class="EasingTool_preview">
      <EasingToolPreview :startHandle="startHandle" :endHandle="endHandle" />
    </div>
    <div class="EasingTool_preset">
      <EasingToolPreset
        :startHandle="startHandle"
        :endHandle="endHandle"
        :currentPreset="currentPreset"
        :currentSlideList="currentSlideList"
        @changeHandle="changeHandle"
      />
    </div>
    <div class="EasingTool_body">
      <EasingToolBody
        :startHandle="startHandle"
        :endHandle="endHandle"
        @changeStartHandle="changeStartHandle"
        @changeEndHandle="changeEndHandle"
      />
    </div>
    <div class="EasingTool_slider">
      <EasingToolSlider
        :startHandle="startHandle"
        :endHandle="endHandle"
        :currentPreset="currentPreset"
        :currentSlideList="currentSlideList"
        @changeSlide="changeSlide"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.EasingTool {
  display: grid;
  grid-template:
    'preview preview' 54px
    'preset body' 1fr
    'slider slider' 47px / 66px 1fr;
  width: 270px;
  height: 350px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background-image: url(../assets/bg.png);
  border-radius: 4px;

  &_preview {
    grid-area: preview;
  }

  &_preset {
    grid-area: preset;
  }

  &_body {
    grid-area: body;
  }

  &_slider {
    grid-area: slider;
  }
}
</style>
