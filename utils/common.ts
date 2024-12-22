export const CSocial = [
  {
    name: 'Facebook',
    route: 'https://www.facebook.com/christophe.hartmann1/',
    icon: 'i-mdi:facebook',
  },
  {
    name: 'Linkedin',
    route: 'https://www.linkedin.com/in/christophe-hartmann-3a297a42/',
    icon: 'i-mdi:linkedin',
  },
]

export const CLinks = [
  {
    name: 'NuxtJS',
    icon: 'i-mdi:nuxt',
    href: 'https://nuxt.com/',
  },
  {
    name: 'Vuetify',
    icon: 'i-mdi:vuetify',
    href: 'https://vuetifyjs.com/en/',
  },
  {
    name: 'RoR',
    icon: 'i-mdi:language-ruby-on-rails',
    href: 'https://rubyonrails.org/',
  },
]

export const CSkills = [
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
    text: 'C\'est la partie invisible pour les visiteurs mais qui donne vie au site. Le backend conserve toutes les données du webmaster et de ses clients, un peu comme un grand tableau. les langages comme PHP, Ruby, Python, SQL etc...',
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
]

export const CSkillsCICD = {
  title: 'CI/CD',
  text: 'L\'intégration continue (CI) est un ensemble de pratiques utilisées en génie logiciel consistant à vérifier à chaque modification de code source que le résultat des modifications ne produit pas de régression dans l\'application développée. Le déploiement continu ou Continuous deployment (CD) en anglais, est une approche d\'ingénierie logicielle dans laquelle les fonctionnalités logicielles sont livrées fréquemment par le biais de déploiements automatisés.',
  skill: [
    {
      type: 'image',
      src: '/img/gitea.png',
      title: 'Gitea',
      text: 'Code hosting',
    },
    {
      type: 'image',
      src: '/img/jenkins.png',
      title: 'Jenkins',
      text: 'Automation',
    },
    {
      type: 'image',
      src: '/img/sonarqube.png',
      title: 'SonarQube',
      text: 'Code quality and security',
    },
    {
      type: 'image',
      src: '/img/openproject.jpg',
      title: 'Openproject',
      text: 'Project managment',
    },
  ],
}

export const CStats = [
  {
    value: '199k+',
    title: 'VueJS',
    url: 'https://github.com/vuejs/vue',
    star_url: `https://api.github.com/repos/vuejs/vue`,
  },
  {
    value: '41k+',
    title: 'NuxtJS',
    url: 'https://github.com/nuxt/nuxt.js/',
    star_url: `https://api.github.com/repos/nuxt/nuxt.js`,
  },
  {
    value: '19k+',
    title: 'Ruby',
    url: 'https://github.com/ruby/ruby',
    star_url: `https://api.github.com/repos/ruby/ruby`,
  },
  {
    value: '51k+',
    title: 'Ruby on Rails',
    url: 'https://github.com/rails/rails',
    star_url: `https://api.github.com/repos/rails/rails`,
  },
  {
    value: '72k+',
    title: 'Laravel',
    url: 'https://github.com/laravel/laravel',
    star_url: `https://api.github.com/repos/laravel/laravel`,
  },
  {
    value: '28k+',
    title: 'Symfony',
    url: 'https://github.com/symfony/symfony',
    star_url: `https://api.github.com/repos/symfony/symfony`,
  },
]