<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container>
      <button-article />

      <page-title
        class="py-12"
        :title="$t('articles.title')"
        icon="i-mdi:book-open-variant-outline"
      />

      <v-row class="d-flex justify-space-around" v-if="articles">
        <v-col
          v-for="({ title, description, icon, color, article_id }, i) in articles"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto"
            max-width="300"
            min-height="480"
            max-height="480"
            color="secondary-container"
            variant="outlined"
            v-aos="['animate__flipInX']"
          >
            <v-icon
              size="280"
              :icon="icon"
              :color="color"
            />
            <v-card-title>
              <div class="font-weight-black text-uppercase">
                {{ title }}
              </div>
            </v-card-title>
            <v-card-text class="title font-weight-light mb-5">
              <v-sheet
                :height="30"
                color="background"
              >
                {{ description }}
              </v-sheet>
            </v-card-text>
            <v-card-actions class="d-flex align-end">
              <v-btn
                class="font-weight-black"
                color="info"
                :nuxt="true"
                :to="`/blog/article/` + article_id"
                variant="outlined"
                block
              >
                <span class="font-weight-bold">
                  Lire
                </span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: articles } = await useAsyncData('content', () => queryCollection(route.params.id).all())
</script>
