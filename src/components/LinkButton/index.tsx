import React, { useState, useEffect } from 'react'

const LinkButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)

  useEffect(() => {
    console.log('触发linkbutton的useEffect')
    document.title = `点击了${like}次`
  }, [like])

  function handleClick() {
    setTimeout(() => {
      console.log(like)
    }, 3000)
  }

  return (
    <React.Fragment>
      <button onClick={() => setLike(like + 1)}>{like}</button>
      <button onClick={() => setOn(!on)}>{on ? '开' : '关'}</button>
      <button onClick={handleClick}>点我试试呀</button>
    </React.Fragment>
  )
}

export default LinkButton
