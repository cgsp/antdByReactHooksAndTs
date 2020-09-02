import React, { useContext, FunctionComponentElement, useState } from 'react'
import classnames from 'classnames'
import { MenuContext } from './index'
import { IMenuItemProps } from './MenuItem'

export interface ISubMenuProps {
  index?: string
  title: string
  className?: string
}

const SubMenu: React.FC<ISubMenuProps> = ({
  index,
  title,
  className,
  children,
}) => {
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as string[]
  const [menuOpen, setOpen] = useState(
    index && context.mode === 'vertical'
      ? openedSubMenus.includes(index)
      : false
  )
  const classes = classnames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: any = null
  const handleMouseHover = (e: React.MouseEvent, toggle: boolean) => {
    e.preventDefault()
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }

  const clickCallBacks =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {}

  const hoverCallBacks =
    context.mode === 'horizontal'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouseHover(e, true)
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouseHover(e, false)
          },
        }
      : {}

  const renderChildren = () => {
    const classes = classnames('gsp-submenu', {
      'menu-opened': menuOpen,
    })
    const childrenComp = React.Children.map(children, (child, childIndex) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${childIndex}`,
        })
      } else {
        console.error('SubMenu组件的children必须是MenuItem组件')
      }
    })

    return <ul className={classes}>{childrenComp}</ul>
  }

  return (
    <li key={index} className={classes} {...hoverCallBacks}>
      <div className="submenu-title" {...clickCallBacks}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
