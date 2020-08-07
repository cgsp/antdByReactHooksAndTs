import { useState, useEffect } from 'react'

const useLoader = (deps: any[] = []) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setData({
        name: 'gsp',
      })
    }, 2000)
  }, deps)

  return {
    data,
    loading,
  }
}

export default useLoader
