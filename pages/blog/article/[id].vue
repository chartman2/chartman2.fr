<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container class="text-center">
      <button-article />

      <page-title
        class="py-12"
        :title="article.title ?? $t('article.unknow')"
        icon="i-mdi:book-open-variant-outline"
      />
      <v-responsive class="text-left">
        <v-sheet
          class="d-flex align-center mx-auto py-2 px-3 mb-2"
          elevation="4"
          min-height="30"
          rounded
          color="background"
          width="100%"
        >
          <ClientOnly>
            <ContentRenderer
              class="w-100"
              v-if="article"
              :value="article"
            />
          </ClientOnly>
        </v-sheet>
      </v-responsive>
    </v-container>
  </v-row>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: article } = await useAsyncData('content', () => queryCollection('content')
  .where('article_id', '=', route.params.id)
  .first())
</script>

