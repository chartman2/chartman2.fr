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
            md="4"
          >
            <v-card
              v-aos="['animate__flipInY']"
              :data-aos-delay="`0.` + ((iSkills + 1) * (iSkill + 1) * 5) + `s`"
              class="py-12 px-4"
              color="on-info-container"
              variant="outlined"
              rounded="xl"
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
        text: 'Progressive JavaScript framework open-source pour créer des applications web progressives et interactives.',
      },
      {
        type: 'icon',
        src: 'i-mdi:nuxt',
        title: 'NuxtJS',
        text: 'Framework Vue.js dédié à la création d’applications web, il propose un modèle de développement basé sur les routes, des fonctionnalités de pré-réglage pour les applications et une intégration avec les bibliothèques tels que Pinia et Vue Router.',
      },
      {
        type: 'icon',
        src: 'i-mdi:vuetify',
        title: 'Vuetify',
        text: 'Framework UI/UX open-source pour Vue.js, offrant une collection de composants Material Design et des fonctionnalités avancées pour créer des applications web modernes et réactives.',
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
        text: 'Langage de programmation dynamique, interprété et orienté objet. Sa syntaxe est simple et readable, il propose des fonctionnalités telles que la programmation procédurale et objet, les métaprogrammations.',
      },
      {
        type: 'icon',
        src: 'i-mdi:language-ruby-on-rails',
        title: 'Ruby on Rails',
        text: 'framework web open-source écrit en Ruby, également connu sous le nom de Rails. Il propose un modèle de développement MVC (Modèle-Vue-Contrôleur) pour créer des applications web rapides et sécurisées, la Convention over Configuration, et le Don’t Repeat Yourself (DRY)',
      },
      {
        type: 'icon',
        src: 'i-mdi:language-php',
        title: 'PHP',
        text: 'Langage de programmation web open-source, interprété et dynamique. Il propose une syntaxe simple et flexible.',
      },
      {
        type: 'icon',
        src: 'i-mdi:laravel',
        title: 'Laravel',
        text: 'Framework PHP populaire et facile à utiliser pour la création d’applications web modernes. Il propose une architecture modulaire, des fonctionnalités de sécurité et de validation intégrées, ainsi que des outils tels que Eloquent (un ORM) et Blade (un moteur de templating). Laravel est souvent considéré comme l’un des frameworks PHP les plus faciles à apprendre et à utiliser',
      },
      {
        type: 'icon',
        src: 'i-mdi:symfony',
        title: 'Symfony',
        text: 'Framework PHP avancé pour la création d’applications web réactives et scalables. Il propose une architecture modulaire, des fonctionnalités de sécurité et de validation robustes, ainsi que des intégrations avec les bases de données et les bibliothèques de gestion de sessions. Symfony est souvent considéré comme l’un des frameworks PHP les plus flexibles et les mieux adaptés aux applications complexes',
      },
      {
        type: 'icon',
        src: 'i-mdi:database',
        title: 'Database design',
        text: 'Système de gestion de données structurées qui permet de stocker, de manipuler et de partager des informations de manière efficace. Les bases de données offrent plusieurs avantages (organisation et gestion des données - accès concurrentiel - recherche et récupération des données - sécurité des données). Les bases de données peuvent stocker différents types d’informations (données structurées MySQL/PostgreSQL - données non structurées MongoDB/Couchbase - données géographiques PostgreSQL avec l’extension PostGIS/GeoServer)',
      },
    ],
  },
  CSkillsCICD,
])
</script>
