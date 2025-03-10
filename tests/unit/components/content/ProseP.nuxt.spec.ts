// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/content/ProseP.vue'

describe('Components - content/ProseP', async () => {
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(TestResource)

    expect(wrapper.vm).toBeTruthy()
  })
})