// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/partial/main/skills.vue'

describe('Components - partial/main/skills', () => {
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(TestResource)

    expect(wrapper.vm).toBeTruthy()
  })

  it('has initialized values', async () => {
    const wrapper = await mountSuspended(TestResource)

    expect(wrapper.vm.skills).toStrictEqual([
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
      {
        title: 'CI/CD',
        text: 'L\'intégration continue (CI) est un ensemble de pratiques utilisées en génie logiciel consistant à vérifier à chaque modification de code source que le résultat des modifications ne produit pas de régression dans l’application développée. Le déploiement continu ou Continuous deployment (CD) en anglais, est une approche d\'ingénierie logicielle dans laquelle les fonctionnalités logicielles sont livrées fréquemment par le biais de déploiements automatisés.',
        skill: [
          {
            type: 'image',
            src: '/img/Forgejo_logo.svg',
            title: 'Forgejo',
            text: 'Système de gestion de projet et de code source open-source qui est un fork de Gitea. Il permet aux développeurs de gérer leurs projets, leurs codes sources et de collaborer avec d’autres membres d’équipe. Offrant des fonctionnalités telles que la création de repository, le suivi des changelogs, la gestion des issues',
          },
          {
            type: 'image',
            src: '/img/jenkins.png',
            title: 'Jenkins',
            text: 'Outil de build automation qui permet aux développeurs de automatiser les processus de construction, de test et de déploiement de leurs applications, grâce à la configuration de pipelines et le suivi des builds.',
          },
          {
            type: 'image',
            src: '/img/sonarqube.png',
            title: 'SonarQube',
            text: 'Outil de qualité logicielle qui permet aux développeurs de mesurer et d’améliorer la qualité de leur code. Il offre des fonctionnalités telles que l’analyse de code, le suivi des règles de qualité et la détection des bugs.',
          },
          {
            type: 'image',
            src: '/img/openproject.jpg',
            title: 'Openproject',
            text: 'Système de gestion de projet qui permet aux développeurs de gérer leurs projets (comme le suivi des tâches, la gestion des ressources) et de collaborer avec d’autres membres d’équipe.',
          },
          {
            type: 'image',
            src: '/img/coolify-transparent.svg',
            title: 'Coolify',
            text: 'Outil de build automation qui permet aux développeurs d’automatiser les processus de déploiement de leurs applications avec la configuration, le suivi des déploiements, des secrets, et rollback automatique.',
          },
          {
            type: 'image',
            src: '/img/glitchtip-g.png',
            title: 'GlitchTip',
            text: 'Outil de debugging qui permet aux développeurs de résoudre les problèmes de code en temps réel.',
          },
        ],
      }
    ])
  })
})