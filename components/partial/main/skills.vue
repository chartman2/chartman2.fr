<template>
  <v-card color="info-container">
    <v-container
      id="features"
      class="text-center py-12"
    >
      <section-title title="Mes compétences" />

      <section
        v-for="({ title, text, skill }, iSkills) in skills"
        :key="iSkills"
        class="pb-4"
      >
        <h3 class="font-weight-bold mb-3 align-justify">
          {{ title }}
        </h3>

        <span class="subtitle-1">
          {{ text }}
        </span>
        <v-row class="d-flex justify-space-around mt-2">
          <v-col
            v-for="({ type, src, title: skillTitle, text: skillText }, iSkill) in skill"
            :key="iSkill"
            cols="12"
            md="3"
          >
            <v-card
              v-aos="['animate__flipInY']"
              :data-aos-delay="`0.` + ((iSkills + 1) * (iSkill + 1) * 5) + `s`"
              class="py-12 px-4"
              color="secondary-container"
              flat
              max-height="300"
              min-height="300"
            >
              <v-avatar
                v-if="type === 'icon'"
                color="primary-container"
                size="88"
                rounded="2"
              >
                <v-icon size="x-large">
                  {{ src }}
                </v-icon>
              </v-avatar>
              <v-avatar
                v-else
                color="primary-container"
                size="88"
                rounded="2"
              >
                <v-avatar
                  color="primary-container"
                  size="42"
                  rounded="2"
                  :image="src"
                />
              </v-avatar>
              <v-card-title
                class="justify-center text-subtitle-1 font-weight-black text-uppercase"
              >
                {{ skillTitle }}
              </v-card-title>
              <v-card-text class="subtitle-1">
                {{ skillText }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-responsive
          class="mx-auto"
          width="112"
        >
          <v-divider class="mt-4" />
        </v-responsive>
      </section>
    </v-container>
  </v-card>
</template>

<script setup>
import { CSkillsCICD } from '~/utils/common'

const skills = reactive([
  {
    title: 'Frontend',
    text: 'Tous les éléments du site que l’on voit à l’écran et avec lesquels on peut interagir. Ces éléments sont composés de HTML, CSS et de Javascript contrôlés par le navigateur web de l’utilisateur.',
    skill: [
      {
        type: 'icon',
        src: 'i-mdi:vuejs',
        title: 'VueJS',
        text: 'Progressive JavaScript framework',
      },
      {
        type: 'icon',
        src: 'i-mdi:nuxt',
        title: 'NuxtJS',
        text: 'Frontend framework',
      },
      {
        type: 'icon',
        src: 'i-mdi:vuetify',
        title: 'Vuetify',
        text: 'Material design framework',
      },
    ],
  },
  {
    title: 'Backend',
    text: 'C’est la partie invisible pour les visiteurs mais qui donne vie au site. Le backend conserve toutes les données du webmaster et de ses clients, un peu comme un grand tableau. les langages comme PHP, Ruby, Python, SQL etc...',
    skill: [
      {
        type: 'icon',
        src: 'i-mdi:language-ruby',
        title: 'Ruby',
        text: 'Dynamic language',
      },
      {
        type: 'icon',
        src: 'i-mdi:language-ruby-on-rails',
        title: 'Ruby on Rails',
        text: 'Web framework',
      },
      {
        type: 'icon',
        src: 'i-mdi:laravel',
        title: 'Laravel',
        text: 'Web framework',
      },
      {
        type: 'icon',
        src: 'i-mdi:symfony',
        title: 'Symfony',
        text: 'Web framework',
      },
      {
        type: 'icon',
        src: 'i-mdi:database',
        title: 'Database design',
        text: 'MySQL / PostgreSQL',
      },
    ],
  },
  CSkillsCICD
])
</script>
