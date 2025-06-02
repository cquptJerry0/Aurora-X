<script setup lang="ts">
import type { ConfigProps } from './type'
import { CONFIG_PROVIDE_KEY, defaultConfig } from './constants'

const props = withDefaults(defineProps<ConfigProps>(), {})

provide<ConfigProps>(CONFIG_PROVIDE_KEY, {
  mdPlugins: props.mdPlugins ?? defaultConfig.mdPlugins,
  highlight: props.highlight ?? defaultConfig.highlight,
})
</script>

<template>
  <slot />
</template>
