import { describe, expect, it } from "vitest";
import { mount } from '@vue/test-utils'
import TestComponent from '../src/TestComponent.vue'

describe('TestComponent', () => {
  it('test 1', async () => {
    const wrapper = mount(TestComponent)

    expect(wrapper.find('pre').exists()).toBe(true)
  })

  it('test 2', async () => {
    const wrapper = mount(TestComponent)

    expect(wrapper.find('pre').exists()).toBe(true)
  })
})