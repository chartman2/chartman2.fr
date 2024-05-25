<template>
  <v-sheet color="info-container" class="pl-6">
    <pre :class="$props.class">
      <slot />
    </pre>
  </v-sheet>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})
</script>

<style>
pre code .line {
  display: block;
}
</style>