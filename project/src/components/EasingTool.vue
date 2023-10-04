<script setup lang="ts">
import EasingToolBody from "@/components/EasingToolBody/EasingToolBody.vue";
</script>

<template>
  <div class="EasingTool">
    <div class="EasingTool_preview">TODO：上部のアニメーション brプレビュー部分</div>
    <div class="EasingTool_preset">TODO：左側プリセット一覧部分</div>
    <div class="EasingTool_body">
      <EasingToolBody/>
    </div>
    <div class="EasingTool_slider">TODO：下部のスライダー部分</div>
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

  &_preview {
    grid-area: preview;
    word-break: break-all;
    background-color: red;
  }

  &_preset {
    grid-area: preset;
    background-color: green;
  }

  &_body {
    grid-area: body;
  }

  &_slider {
    grid-area: slider;
    background-color: yellow;
  }
}
</style>
