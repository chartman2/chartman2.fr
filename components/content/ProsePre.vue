<template>
  <v-card
    class="mx-auto bg-surface-dark"
    theme="dark"
    rounded="lg"
  >
    <template v-slot:subtitle>
      <span class="align-center pt-2 pl-2">
        {{ props.filename }}
        <v-btn
          class="float-right mr-2" 
          variant="outlined"
          color="primary"
          @click="copy(source)" 
        >
          <v-icon icon="i-mdi:content-copy" @click="copy(source)" />
        </v-btn>
      </span>
    </template>
    <template v-slot:text>
      <pre :class="$props.class"><slot /></pre>
    </template>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
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
const source = ref(props.code)
const { text, copy, copied, isSupported } = useClipboard({ source })
</script>

<style>
pre code .line {
  display: block;
}
</style>