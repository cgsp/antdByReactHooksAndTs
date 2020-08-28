import React, { createContext, useState } from 'react'
import classnames from 'classnames'

type MenuMode = 'vertical' | 'horizontal'
type SelectCallBack = (selectedIndex: number) => void

export interface IMenuProps {
  defaultIndex?: number
  className?: string
  style?: React.CSSProperties
  mode?: MenuMode
  onSelected?: SelectCallBack
}

export interface IMenuContext {
  index: number
  onSelected?: SelectCallBack
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<IMenuProps> = ({
  children,
  defaultIndex,
  className,
  style,
  mode,
  onSelected,
}) => {
  const [currentActive, setActive] = useState(defaultIndex || 0)
  const classes = classnames('gsp-menu', className, {
    'menu-vertical': mode === 'vertical',
  })
  const handleClick = (index: number) => {
    setActive(index)
    onSelected && onSelected(index)
  }

  const passedContext: IMenuContext = {
    index: currentActive,
    onSelected: handleClick,
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'vertical',
}

export default Menu
