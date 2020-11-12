import React, { useEffect, useCallback } from 'react'

export default () => {
  console.log('render')
  const testFn = useCallback(
    // useCallback返回的函数在useCallbak中构建
    () => () => {
      console.log({ name: 'dx', age: '18' })
      return {
        name: 'yx',
        age: '17',
      }
    },
    []
  )

  useEffect(() => {
    console.log(testFn())
  }, [testFn])

  return <div>哈哈</div>
}
