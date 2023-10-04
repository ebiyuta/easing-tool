<script setup lang="ts"></script>

<template>
  <div class="easingTool">
    <div class="easingTool_preview">TODO：上部のアニメーションプレビュー部分</div>
    <div class="easingTool_preset">TODO：左側プリセット一覧部分</div>
    <div class="easingTool_body">TODO：イージングツールの本体部分</div>
    <div class="easingTool_slider">TODO：下部のスライダー部分</div>
  </div>
</template>

<style scoped lang="scss">
.easingTool {
  display: grid;
  grid-template:
    'preview preview' 30px
    'preset body' 1fr
    'slider slider' 30px / 80px 1fr;
  width: 260px;
  height: 350px;

  &_preview {
    grid-area: preview;
    background-color: red;
  }

  &_preset {
    grid-area: preset;
    background-color: green;
  }

  &_body {
    grid-area: body;
    background-color: blue;
  }

  &_slider {
    grid-area: slider;
    background-color: yellow;
  }
}
</style>
