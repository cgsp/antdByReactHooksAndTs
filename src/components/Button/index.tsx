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

// 联合类型
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>

// 联合类型
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>

// 最终的button props
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const {
    href,
    size,
    btnType,
    disabled,
    children,
    className,
    ...restProps
  } = props

  // btn btn-lg btn-primary
  const classes = classnames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    )
  }

  return (
    <button disabled={disabled} className={classes} {...restProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}

export default Button
