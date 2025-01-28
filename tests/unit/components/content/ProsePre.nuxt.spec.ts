// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/content/ProsePre.vue'

describe('Components - content/ProsePre', async () => {
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(TestResource)

    expect(wrapper.vm).toBeTruthy()
  })
})