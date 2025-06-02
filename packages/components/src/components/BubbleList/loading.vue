<script setup lang="ts">
withDefaults(
  defineProps<{
    /**
     * SVG尺寸
     * @default 40
     */
    size?: number | string

    /**
     * 透明度
     * @default 0.2
     */
    opacity?: number | string
  }>(),
  {
    size: 40,
    opacity: 0.2,
  }
)
</script>

<template>
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="{ opacity }"
  >
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="currentColor"
      stroke-width="8"
      stroke-dasharray="170"
      stroke-dashoffset="20"
      fill="none"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  stroke-linecap: round;
}
</style>
