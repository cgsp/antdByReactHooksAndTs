import React, { useState } from 'react'

const LinkButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)

  return (
    <React.Fragment>
      <button onClick={() => setLike(like + 1)}>
        {like}
      </button>
      <button onClick={() => setOn(!on)}>{on ? '开' : '关'}</button>
    </React.Fragment>
  )
}

export default LinkButton
