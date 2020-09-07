import React from 'react'
import classnames from 'classnames'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface IIconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: React.FC<IIconProps> = ({ className, theme, ...restProps }) => {
  const classes = classnames('gsp-icon', className, {
    [`icon-${theme}`]: theme,
  })

  return <FontAwesomeIcon className={classes} {...restProps} />
}

export default Icon
