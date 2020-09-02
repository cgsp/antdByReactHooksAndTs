import React, { createContext, useState } from 'react'
import classnames from 'classnames'
import { IMenuItemProps } from './MenuItem'

type MenuMode = 'vertical' | 'horizontal'
type SelectCallBack = (selectedIndex: string) => void

export interface IMenuProps {
  defaultIndex?: string
  className?: string
  style?: React.CSSProperties
  mode?: MenuMode
  onSelected?: SelectCallBack
  defaultOpenSubMenus?: string[]
}

export interface IMenuContext {
  index: string
  onSelected?: SelectCallBack
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<IMenuProps> = ({
  children,
  defaultIndex,
  className,
  style,
  mode,
  onSelected,
  defaultOpenSubMenus,
}) => {
  const [currentActive, setActive] = useState(defaultIndex || '0')
  const classes = classnames('gsp-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })
  const handleClick = (index: string) => {
    setActive(index)
    onSelected && onSelected(index)
  }

  const passedContext: IMenuContext = {
    index: currentActive,
    onSelected: handleClick,
    mode,
    defaultOpenSubMenus,
  }

  /**
   * 1、强制要求，menu的children必须是MenuItem组件
   * 2、如果index用户没传的话，
   */
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        IMenuItemProps
      >
      const { displayName } = childElement.type || {}
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: index + '' })
      } else {
        console.error('Menu组件的children必须是MenuItem组件')
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubMenus: [],
}

export default Menu
