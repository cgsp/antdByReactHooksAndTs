import React, { useState, useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../../App'

const LinkButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)
  console.log(theme)

  useEffect(() => {
    if (didMountRef.current) {
      console.log('现在是更新阶段，执行吧')
    } else {
      console.log('初次渲染')
      didMountRef.current = true
    }
  })

  useEffect(() => {
    console.log('触发linkbutton的useEffect')
    document.title = `点击了${like}次`
  }, [like])

  function handleClick() {
    setTimeout(() => {
      console.log(like)
      console.log(likeRef.current)
    }, 3000)
  }

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })

  return (
    <React.Fragment>
      <input type="text" ref={domRef} />
      <button
        onClick={() => {
          setLike(like + 1)
          likeRef.current++
        }}
      >
        {like}
      </button>
      <button onClick={() => setOn(!on)}>{on ? '开' : '关'}</button>
      <button onClick={handleClick}>点我试试呀</button>
    </React.Fragment>
  )
}

export default LinkButton
