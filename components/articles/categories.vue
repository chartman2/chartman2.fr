<template>
  <v-row class="d-flex justify-space-around">
    <v-col
      v-for="({ type, src, color, text, title, link }, i) in articles"
      :key="i"
      v-aos="['animate__fadeIn']"
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
          v-if="type === 'icon'"
          role="img"
          size="280"
          :icon="src"
          :color="color"
        />

        <v-img
          v-else
          color="primary"
          size="300"
          :image="src"
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
            {{ text }}
          </v-sheet>
        </v-card-text>
        <v-card-actions class="d-flex align-end">
          <v-btn
            class="font-weight-black"
            color="info"
            :nuxt="true"
            :to="link"
            variant="outlined"
            block
          >
            <span class="font-weight-bold">
              Lire
            </span>
          </v-btn>
        </v-card-actions>
      </v-card>
      <div class="d-flex justify-center" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const articles = reactive([
  {
    type: 'icon',
    src: 'i-mdi:language-ruby',
    color: 'red',
    title: 'Ruby',
    text: 'Articles autour du langage Ruby.',
    link: '/blog/category/ror',
  },
  {
    type: 'icon',
    src: 'i-mdi:nuxt',
    color: 'green',
    title: 'Nuxt',
    text: 'Articles autour du framework Nuxt.',
    link: '/blog/category/nuxt',
  },
  {
    type: 'icon',
    src: 'i-mdi:docker',
    color: 'blue',
    title: 'Docker',
    text: 'Articles autour de Docker.',
    link: '/blog/category/docker',
  },
  {
    type: 'icon',
    src: 'i-mdi:checkbox-marked-circle-plus-outline',
    color: 'black',
    title: 'To-do list',
    text: 'Construction d\'une To-do list.',
    link: '/blog/category/todolist',
  },
])
</script>
