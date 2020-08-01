import { useState, useEffect } from 'react'

interface IPosition {
  x: number
  y: number
}

// !自定义hook必须以 "use" 开头
const useMousePosition = (): IPosition => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    document.addEventListener('mousemove', updatePosition)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
    }
  }, [])

  return position
}

export default useMousePosition
