import React, { Component } from 'react'
import classnames from 'classnames'

export interface MenuItemProps {
  index?: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = ({
  index,
  disabled,
  className,
  style,
  children,
}) => {
  const classes = classnames('menu-item', className, {
    'is-disabled': disabled,
  })

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  )
}

export default MenuItem
