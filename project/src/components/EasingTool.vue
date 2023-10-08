<script setup lang="ts">
import EasingToolBody from '@/components/EasingToolBody/EasingToolBody.vue'
import EasingToolPreset from '@/components/EasingToolPreset/EasingToolPreset.vue'
import EasingToolSlider from '@/components/EasingToolSlider/EasingToolSlider.vue'
import EasingToolPreview from '@/components/EasingToolPreview/EasingToolPreview.vue'
import { reactive } from 'vue'

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
        @changeHandle="changeHandle"
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
