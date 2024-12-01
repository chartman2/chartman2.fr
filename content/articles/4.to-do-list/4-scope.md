---
title: 'To-do list App'
description: 'Scopes'
icon: 'i-mdi:checkbox-marked-circle-plus-outline'
article_id: '4-to-do-list-scope'
---

Maintenant que nous avons nos tâches, nous allons rajouter un context (scope) pour les filtrer.

Dans un premier temps définissons nos contextes :
 - Personnel
 - Travail
 - Famille
 - Autre

 Pour cela, créons le fichier *types/scope.ts*

 ```ts
export type IScope = 'personnal' | 'work' | 'family' | 'other'

export const scopeValues: IScope[] = [
  'personnal',
  'work',
  'family',
  'other'
]
 ```

Implémentons ce type dans notre *types/todo.ts*

```ts
import type { IScope } from "~/types/scope"

export interface ITodoItem {
  name: string
  done: boolean
  scope: IScope
}
```

Ainsi que dans notre fichier de traduction *i18n.config.ts*

```ts
  list: {
    title: 'Liste des tâches'
  },
  scope: {
    personnal: 'Personnel',
    work: 'Travail',
    family: 'Famille',
    other: 'Autre'
  }
```

Il nous reste à modifier l'affichage dans la liste, et dans le formulaire

*components/partial/todo/new.vue*

```vue
<template>
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
    <v-row>
      <v-radio-group
        v-model="newTaskScope"
        :rules="rules"
        inline
      >
        <v-radio
          v-for="(scopeName, scopeKey) in scopeValues"
          :key="scopeKey"
          :label="$t('tasks.scope.' + scopeName)"
          :value="scopeName"
        ></v-radio>
      </v-radio-group>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { useTodoStore } from '~/stores/todo'
import type { IScope } from '~/types/scope'
import { scopeValues } from '~/types/scope'

const todoStore = useTodoStore()
const { t } = useI18n()
const newTaskName = ref('')
const newTaskScope = ref(null as IScope | null)
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
    done: false,
    scope: newTaskScope.value as IScope
  })

  newTaskName.value = ''
  newTaskScope.value = null
}
</script>

```

*components/partial/todo/list.vue*

```vue
<template>
  <v-row>
    <v-radio-group
      v-model="filterTaskScope"
      inline
    >
      <v-radio
        v-for="(scopeName, scopeKey) in scopeValues"
        :key="scopeKey"
        :label="$t('tasks.scope.' + scopeName)"
        :value="scopeName"
      />
      <v-radio
        :label="$t('tasks.list.all')"
        value="all"
      />
    </v-radio-group>
  </v-row>
  <v-row
    v-for="(task, key) in listTasksFiltred"
    :key="key"
  >
    <v-col cols="4">
      <v-chip color="primary">
        <div :class="{'text-decoration-line-through': task.done === true}">
          {{ $t('tasks.scope.' + task.scope) }}
        </div>
      </v-chip>
    </v-col>
    <v-col cols="4">
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
import { scopeValues } from '~/types/scope'
import type { ITodoItem } from '~/types/todo';

const todoStore = useTodoStore()
const listTasks = computed(() => todoStore.getList)
const filterTaskScope = ref('all')
const listTasksFiltred: Ref<ITodoItem[]> = ref(listTasks.value)

const performTask = (key: number) => {
  todoStore.performItem(key)
}

watch(filterTaskScope, async (newFilter, oldFilter) => {
  if (newFilter === 'all') {
    listTasksFiltred.value = listTasks.value
  } else {
    listTasksFiltred.value = listTasks.value.filter( (task) => {
      return task.scope === newFilter
    })
  }
})
</script>
```

Dans cet article, nous avons réussi à mettre en œuvre une application de liste de tâches avec une fonction de filtrage du champ d'application. 

Nous avons commencé par créer l'API backend en utilisant Rails et nous avons refait le code frontend pour nous y connecter. Ensuite, nous avons défini les types de portée et implémenté la logique de filtrage à la fois dans le nouveau formulaire de tâche et dans le composant de liste de tâches. 
Avec cette implémentation, les utilisateurs peuvent maintenant filtrer leurs tâches par domaine (personnel, travail, famille ou autre) et ne voir que les tâches pertinentes dans chaque catégorie de domaine. 

Dans le prochain article, nous explorerons d'autres améliorations de notre application de liste de tâches, telles que l'implémentation de dates d'échéance, la priorisation et les fonctionnalités de délégation de tâches. 

