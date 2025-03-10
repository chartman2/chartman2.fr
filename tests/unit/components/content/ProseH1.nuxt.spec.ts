// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/content/ProseH1.vue'

describe('Components - content/ProseH1', async () => {
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(TestResource)

    expect(wrapper.vm).toBeTruthy()
  })
})