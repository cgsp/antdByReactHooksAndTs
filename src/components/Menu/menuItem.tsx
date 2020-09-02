import React, { useContext } from 'react'
import classnames from 'classnames'
import { MenuContext } from './index'

export interface IMenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

const MenuItem: React.FC<IMenuItemProps> = ({
  index,
  disabled,
  className,
  style,
  children,
}) => {
  const context = useContext(MenuContext)
  const classes = classnames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  })

  const handleClick = () => {
    if (context.onSelected && !disabled && typeof index === 'string') {
      context.onSelected(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem
