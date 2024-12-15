---
title: 'To-do list App'
description: 'Refactor'
icon: 'i-mdi:checkbox-marked-circle-plus-outline'
article_id: '3-to-do-list-refactor'
---

Dans cet articles, nous allons refactoriser la partie ToDo.

Créons un store pour les tâches (comme un panier sur les sites d'ecommerce)

**stores/todo**
```ts
import { defineStore, acceptHMRUpdate } from 'pinia'
import type { ITodoItem } from '~/types/todo'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    list: [] as ITodoItem[]
  }),
  getters: {
    getList: state => state.list
  },
  actions: {
    addItem(item: ITodoItem) {
      this.list.push(item)
    },
    performItem(key: number) {
      this.list[key].done = true
    }
  },
  persist: {
      storage: persistedState.localStorage,
  },
})

if (Object.hasOwn(import.meta, 'hot')) {
    // @ts-ignore
    import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
}
```

Puis divisons la gestion du todo en 2, la lsite et le formulaire d'ajout

**components/partial/todo/list.vue**

```vue
<template>
  <section-title :title="$t('tasks.list.title')" />
  <v-row
    v-for="(task, key) in listTasks"
    :key="key"
  >
    <v-col cols="8">
      <div :class="{'text-decoration-line-through': task.done === true}">
        {{ task.name }}
      </div>
    </v-col>
    <v-col cols="4">
      <v-btn 
        v-if="task.done === false"
        type="button" 
        block
        @click.prevent="performTask(key)"
      >
        <v-icon icon="i-mdi:checkbox-marked-circle-plus-outline" />
      
        {{ $t('tasks.form.done') }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { useTodoStore } from '~/stores/todo'

const todoStore = useTodoStore()
const listTasks = computed(() => todoStore.getList)

const performTask = (key: number) => {
  todoStore.performItem(key)
}

</script>
```

Pinia et ses fonctions définies en state management pour Vue.js (et Nuxt.js, qui repose sur Vue.js)


La première ligne importe les fonctions defineStore et acceptHMRUpdate du package Pinia. Ces fonctions sont utilisées dans le contexte de gestion des données et permettent d'implémenter l'utilisation de Pinia.


La deuxième ligne importe un type (ITodoItem) depuis un fichier nommé ~/types/todo. Ce type représente probablement une tâche avec des propriétés comme texte, terminée, etc.

La fonction defineStore est utilisée pour créer un nouveau stock Pinia. Dans ce cas, le nom du stock est "todo".


Le stock possède trois parties principales :


**État** : Cet objet représente l'état initial du stock. Ici, c'est un tableau de tâches (liste) qui est initialisé avec une liste vide [].


**Fonctions de lecture** : Ces fonctions vous permettent d'extraire des données à partir de l'état. Dans ce cas, il y a une seule fonction de lecture nommée getList qui retourne l'ensemble de la liste étatique.


**Fonctions d'action** : Ces fonctions peuvent être utilisées pour modifier l'état. Ici, deux actions sont définies :


*addItem* : Prend un nouvel élément de tâche (item) et ajoute-le à la fin de l'array de listes avec la méthode push().


*performItem* : Prend une clé (probablement un index ou ID) et change la propriété done du correspondant élément de tâches dans l'array de listes en vrai.


Le stock est configuré pour conserver son état à l'aide du mécanisme de stockage localStorage.


HMR (Remplacement de modules à chauds)


La dernière partie du code vérifie si HMR (Hot Module Replacement) est activée en vérifiant si la propriété hot existe sur l'objet import.meta. Si oui, il appelle la méthode accept avec une fonction acceptHMRUpdate en argument. Ceci est une fonctionnalité spécifique de Pinia qui permet de gérer les mises à jour effectuées durant le remplacement d'un module.


La fonction acceptHMRUpdate prend deux arguments : le stock (utiliser useTodoStore) et l'objet de remplacement de modules chauds (import.meta.hot). Elle est utilisée pour mettre à jour le stock lorsque le module est remplacé (par exemple, en raison d'une modification du code).


**components/partial/todo/new.vue**

```vue
<template>
  <section-title :title="$t('tasks.form.title')" />
  <v-form 
    @submit.prevent="addTask" 
    v-model="formValid"
  >
    <v-row>
      <v-col cols="8">
        <v-text-field
          v-model="newTaskName"
          :rules="rules"
          :label="$t('tasks.form.name')"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-btn type="submit" block :disabled="!formValid">
          {{ $t('tasks.form.add') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script setup lang="ts">
import { useTodoStore } from '~/stores/todo'

const todoStore = useTodoStore()
const { t } = useI18n()
const newTaskName = ref('')
const formValid = ref(false)
const rules = reactive([
  (value: string) => {
    if (value) return true

    return t('tasks.form.required')
  },
])

const addTask = () => {
  todoStore.addItem({
    name: newTaskName.value,
    done: false
  })

  newTaskName.value = ''
}
</script>
```

Le code importe la fonction useTodoStore du module **~/stores/todo** qui fournit l'accès à un stock Pinia pour gérer les éléments des tâches.


Utilisation de i18n : Le code importe également la fonction useI18n, qui fournit un système d'internationalisation pour traduire les chaînes de caractères.


Références réactives :


newTaskName : Référence réactive initialisée sur une chaîne vide ('') qui sera utilisée pour stocker le nom de la nouvelle tâche.


formValid : Référence réactive initialisée à false qui suivra l'état de validité du formulaire.


Règles de validation : Le tableau des règles définit une seule règle de validation pour le champ de texte :


Si la valeur est vraie (i.e., non une chaîne vide), retourner true.


Sinon, retourner un message traduit (tasks.form.required) grâce à la fonction $t().


Fonction addTask


Ajout d'un élément des tâches : La fonction addTask ajoute un nouvel élément de tâche au stock avec :


Un attribut nommé name défini sur la valeur de newTaskName.


Une propriété done définie sur false.


Réinitialisation du formulaire : La fonction également réinitialise le formulaire en établissant nouvelleTaskName sur une chaîne vide.

Ajoutons le composant todo/new à la page d'index 

**pages/index.vue**

```vue
<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container>
      <page-title :title="$t('global.name')" icon="i-mdi:format-list-checks" />

      <partial-todo-new />
      
      <partial-todo-list />
    </v-container>
  </v-row>
</template>
```

Dans l'article suivant nous ajouterons le contexte (scope : perso, famille, etc...)

[quatrième partie](/blog/article/4-scope)