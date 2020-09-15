import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right'

type ITransitionProps = CSSTransitionProps & {
  animation?: AnimationName
  // wrapper 这个属性是为了防止被包裹的节点，也有transition属性，会覆盖本组件的这个属性
  wrapper?: boolean
}

const Transition: React.FC<ITransitionProps> = ({
  children,
  classNames,
  animation,
  wrapper,
  ...restProps
}) => {
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition
