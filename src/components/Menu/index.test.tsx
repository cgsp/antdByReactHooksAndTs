import React from 'react'
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
  // waitFor
} from '@testing-library/react'
import Menu, { IMenuProps } from './index'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

const testProps: IMenuProps = {
  defaultIndex: '0',
  onSelected: jest.fn(),
  className: 'test',
}

const testVertivalProps: IMenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
}

const generateMenu = (props: IMenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
      <SubMenu title={'dropdown'}>
        <MenuItem>drop1</MenuItem>
      </SubMenu>
    </Menu>
  )
}

const createStyleFile = () => {
  const cssString: string = `
    .gsp-submenu {
      display: none;
    }
    .gsp-submenu.menu-opened {
      display: block;
    }
  `

  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssString
  return style
}

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement

describe('test Menu and MenuItem component', () => {
  // 这个beforeEach在每个it执行前，都会执行
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('gsp-menu test')
    // getElementsByTagName不分层次，会取得各个层次的结点的总数
    expect(menuElement.getElementsByTagName('li').length).toEqual(5)
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelected).toHaveBeenCalledWith('2')
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
  it('should show dropdown items when hover on subMenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible()
    const dropdownElement = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    // await waitFor(() => {
    //   expect(wrapper.queryByText('drop1')).toBeInTheDocument()
    // })

    await expect(wrapper.queryByText('drop1')).toBeInTheDocument()
    fireEvent.click(wrapper.getByText('drop1'))
    expect(testProps.onSelected).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElement)
    await expect(wrapper.queryByText('dorp1')).not.toBeInTheDocument()
  })
})
