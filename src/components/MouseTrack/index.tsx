import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('add effect', positions.x)
    const update = (e: MouseEvent) => {
      console.log('触发了')
      setPositions({
        x: e.pageX,
        y: e.pageY,
      })
    }
    document.addEventListener('click', update)

    console.log('before render', positions.x)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('click', update)
    }
  }, [])

  return (
    <p>
      X:{positions.x} Y:{positions.y}
    </p>
  )
}

export default MouseTracker
