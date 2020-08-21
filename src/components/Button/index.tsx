import React from 'react'
import classnames from 'classnames'

export enum ButtonType {
  Primary = 'primary',
  Danger = 'danger',
  Default = 'default',
  Link = 'link',
}

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

interface BaseButtonProps {
  className?: string
  href?: string
  disabled?: boolean
  size?: string
  btnType?: string
  children?: React.ReactNode
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { href, size, btnType, disabled, children } = props

  // btn btn-lg btn-primary
  const classes = classnames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={() => {
        console.log('哈哈')
      }}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}

export default Button
