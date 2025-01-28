<template>
  <v-toolbar
    color="info-container"
    rounded="lg"
  >
    <v-btn
      variant="tonal"
      color="info"
      class="ml-6"
      @click="$router.back()"
    >
      <v-icon icon="i-mdi:arrow-left-circle" />
    </v-btn>
    <v-btn
      to="/"
      variant="tonal"
      class="ml-6"
      color="info"
    >
      <v-icon icon="i-mdi-home" />
    </v-btn>

    <v-spacer />

    <v-btn
      v-if="route.name != 'articles'"
      to="/articles"
      variant="tonal"
      color="primary"
      class="mr-6"
    >
      <v-icon icon="i-mdi:book-open-variant-outline" />
    </v-btn>
  </v-toolbar>
</template>

<script setup>
const route = useRoute()
</script>
