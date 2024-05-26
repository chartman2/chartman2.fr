---
title: 'To-do list App'
description: 'Initialisation'
icon: 'i-mdi:checkbox-marked-circle-plus-outline'
article_id: '1-to-do-list-initialisation'
---

Nous allons construire une application "To-do list" ([wikipedia](https://en.wikipedia.org/wiki/Wikipedia:To-do_list){:target="_blank"}) avec [Nuxt](https://nuxt.com/){:target="_blank"} et [RoR](https://rubyonrails.org/){:target="_blank"}.

L'application sera divisée en deux, la partie *frontend* avec le framework **Nuxt** (basé sur VueJS) et la partie *backend* avec de framework **Ruby on Rails** 

# Frontend 


Nous allons commencer la partie frontend (interface utilisateur) avec [**Nuxt**](/blog/article/1-nuxt-initialisation){:target="_blank"}.

Pour cela, j'ai créé un dépôt afin de commencer avec une configuration déjà effectuée.


## Installation

* Créer un dépôt sur Github 'todo-frontend' et le clôner.


```shell
git clone git@github.com:<username>/todo-frontend.git
```
 
* Clôner le dépôt https://github.com/chartman2/nuxt-frontend-template 

```shell
git clone git@github.com:chartman2/nuxt-frontend-template.git
```
* Copier les fichiers et répertoires (sauf le .git) dans votre dépot 'todo-frontend'

```shell
rsync -r --exclude '.git' nuxt-frontend-template todo-frontend
```

* Accéder à l'application **todo-frontend**.

```shell
cd todo-frontend
```

* Copier le fichier .env.example vers .env
Et personnaliséz le.


```shell
cp .env.example .env
```

* Installation de l'application

```shell
docker compose build 
```

## Lancement de l'application et de VS Code


```shell
docker compose up
```


Accéder aux adresses : 
```shell
https://<APP_URL>
https://<APP_VSCODE_URL>
```

Nous avons maintenant un envronnement pour développer notre application fonctionnel.

## Ajout du nom de notre application

Editez le fichier `i18n.config.ts` et modifier la variable `name`
```yml
fr: {
      global: {
          name: "Todo application",
          ...
      },
      ...
}
```

Ainsi que le fichier `pages/index.vue`
```ts
<v-row class="d-flex align-self-start py-12">
  <v-container>
    <page-title :title="$t('global.name')" icon="i-mdi:format-list-checks" />
  </v-container>
</v-row>
```

