<template lang="pug">
  v-svg(class="diagram" viewBox="0 0 42 42")
    .circle(
      :class="classCircleBack"
      :r="radius"
      cx="50%"
      cy="50%"
      :stroke-dashoffset="dashoffset")
    .circle(
      ref="mainDiagram"
      class="front"
      :class="classCircleFront"
      :stroke-dasharray="dasharray"
      :r="radius"
      cx="50%"
      cy="50%")
    .circle(
      v-if="satellite"
      class="satellite"
      r="1"
      cx="101%"
      cy="50%"
      :style="rotate")
</template>
