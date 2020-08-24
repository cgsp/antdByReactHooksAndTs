import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'

test('button组件测试1', () => {
  const wrapper = render(<Button>Nice</Button>)
  const element = wrapper.queryByText('Nice')
  expect(element).toBeTruthy()
})

test('button组件测试2', () => {
  const wrapper = render(<Button>Nice1</Button>)
  const element = wrapper.queryByText('Nice1')
  expect(element).toBeTruthy()
})
