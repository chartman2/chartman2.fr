// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/articles/categories.vue'

describe('Components - articles/categories', async () => {
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(TestResource)

    expect(wrapper.vm).toBeTruthy()
  })

  it('has initialized values', async () => {
    const wrapper = await mountSuspended(TestResource)

    expect(wrapper.vm.articles).toEqual([
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
  })
})