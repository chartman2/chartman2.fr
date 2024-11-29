// @ts-nocheck
// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import TestResource from '~~/components/partial/main/contact_me.vue'

global.$fetch = vi.fn()

function createFetchResponse(data) {
  return { json: () => Promise.resolve(data) }
}

describe('Components - partial/main/contact_me', () => {
  it('is a Vue instance', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true
    })

    expect(wrapper.vm).toBeTruthy()
  })

  it('has initialized values', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true
    })

    expect(wrapper.vm.valid.value).toEqual(false)
    expect(wrapper.vm.name.value).toEqual('')
    expect(wrapper.vm.email.value).toEqual('')
    expect(wrapper.vm.subject.value).toEqual('')
    expect(wrapper.vm.message.value).toEqual('')
    expect(wrapper.vm.nameRules).toBeDefined()
    expect(wrapper.vm.nameRules).toHaveLength(2)
  })

  it('cannot send email', async () => {
    const wrapper = await mountSuspended(TestResource)

    $fetch.mockResolvedValue(createFetchResponse(true))
    
    wrapper.vm.sendEmail()
    
    expect($fetch).toHaveBeenCalledTimes(0)
  })

  it('can send email', async () => {
    const wrapper = await mountSuspended(TestResource)

    $fetch.mockResolvedValue(createFetchResponse(true))

    wrapper.vm.name.value = 'test name'
    wrapper.vm.email.value = 'test@ŧest.com'
    wrapper.vm.subject.value = 'subject'
    wrapper.vm.message.value = 'This is a message test'
    wrapper.vm.valid.value = true
    
    wrapper.vm.sendEmail()
    
    expect($fetch).toHaveBeenCalledTimes(1)
  })

  it('correspond to snapshot', async () => {
    const wrapper = await mountSuspended(TestResource, {
      shallow: true
    })

    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<v-card-stub color="info-container" disabled="false" flat="false" hover="false" ripple="true" border="false" density="default" loading="false" tile="false" replace="false" exact="false" tag="div" variant="elevated"></v-card-stub>"
    `)
  })
})