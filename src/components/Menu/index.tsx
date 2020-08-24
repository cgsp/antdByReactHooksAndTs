import React from 'react'
import classnames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelected?: (selectedIndex: number) => void
}

const Menu: React.FC<MenuProps> = ({
  className,
  mode,
  style,
  children,
  defaultIndex,
}) => {
  const classes = classnames('gsp-menu', className, {
    'menu-vertical': mode === 'vertical',
  })

  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
}

export default Menu
