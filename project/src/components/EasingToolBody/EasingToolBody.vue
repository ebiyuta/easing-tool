<script setup lang="ts">
// 始点の座標
const START_POINT = {
  x: 2,
  y: 185
}
// 終点の座標
const END_POINT = {
  x: 137,
  y: 50
}
// 始点ハンドルの座標
const startHandle = {
  x: 74,
  y: 185
}
// 終点ハンドルの座標
const endHandle = {
  x: 74,
  y: 50
}
</script>

<template>
  <div class="EasingToolBody">
    <svg class="ml-auto" width="148" height="248" xmlns="http://www.w3.org/2000/svg">
      <!-- 背景のリニアを表す補助線 -->
      <line :x1="START_POINT.x" :y1="START_POINT.y" :x2="END_POINT.x" :y2="END_POINT.y" fill="none" stroke="#DFE1E5" stroke-width="2" stroke-linecap="round" />

      <!-- イージングの強度を示すベジェ曲線 -->
      <path :d="`M ${START_POINT.x} ${START_POINT.y} C 74 185, 74 50 ${END_POINT.x} ${END_POINT.y}`" stroke="black" stroke-width="4" fill="transparent" stroke-linecap="round"/>
      <!-- 始点とハンドルを繋ぐ補助線 -->
      <line :x1="START_POINT.x" :y1="START_POINT.y" :x2="startHandle.x" :y2="startHandle.y" fill="none" stroke="#9034AA" stroke-width="2" opacity="0.8" />
      <!-- 終点とハンドルを繋ぐ補助線 -->
      <line :x1="END_POINT.x" :y1="END_POINT.y" :x2="endHandle.x" :y2="endHandle.y" fill="none" stroke="#9034AA" stroke-width="2" opacity="0.8" />
      <!-- 始点のハンドル -->
      <circle :cx="startHandle.x" :cy="startHandle.y" r="8" fill="#9034AA" />
      <!-- 終点のハンドル -->
      <circle :cx="endHandle.x" :cy="endHandle.y" r="8" fill="#9034AA" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.EasingToolBody {
}
</style>
