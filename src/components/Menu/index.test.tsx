import React from 'react'
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
} from '@testing-library/react'
import Menu, { IMenuProps } from './index'
import MenuItem from './menuItem'

const testProps: IMenuProps = {
  defaultIndex: 0,
  onSelected: jest.fn(),
  className: 'test',
}

const testVertivalProps: IMenuProps = {
  defaultIndex: 0,
  mode: 'vertical',
}

const generateMenu = (props: IMenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem index={1} disabled>
        disabled
      </MenuItem>
      <MenuItem index={2}>xyz</MenuItem>
    </Menu>
  )
}

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement

describe('test Menu and MenuItem component', () => {
  // 这个beforeEach在每个it执行前，都会执行
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('gsp-menu test')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('gsp-menu-item is-active')
    expect(disabledElement).toHaveClass('gsp-menu-item is-disabled')
  })
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelected).toHaveBeenCalledWith(2)
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelected).not.toHaveBeenNthCalledWith(1)
  })
  it('should render vertical mode when mode is set to vertical', () => {
    // 先清除之前的所有的测试节点
    cleanup()
    const wrapper = render(generateMenu(testVertivalProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
})
