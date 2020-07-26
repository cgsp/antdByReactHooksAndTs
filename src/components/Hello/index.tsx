import * as React from 'react'
import style from './style.module.scss'

export interface IProps {
  name?: string
}

export default function Hello(props: IProps) {
  return (
    <div className={style['hello']}>
      {props.name || '关赛鹏'}，您好
      <p className="test">我是测试的</p>
    </div>
  )
}
