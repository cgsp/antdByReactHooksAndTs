import React, { useState, useEffect } from 'react'
import httpMethods from './util'

console.log(httpMethods.get('xx', { data: { a: 1 } }))
interface IProps {
  name: string
}

const Comp: React.FC<IProps> = ({ name }) => {
  const [count, setCount] = useState(5)
  const [familyName, setFamilyName] = useState('gsp')

  // []这个参数，有几种写法
  // 1、不写===数组写全[部分A，部分B，...]
  // 2、写空数组[]，只有初次渲染(effect)，和卸载时候(clean)，执行
  // 3、数组只写部分A[部分A]，只有初次渲染(effect)，部分A变化(如果部分B变化了之后，再让部分A变化，读取的部分B，clean时候还是旧的，effect时候是新的)、卸载时候(clean)，执行

  // !如果不写 或者 写全 或者写[count]，执行的逻辑是:初始化时候执行1 => 5秒后，执行2，执行clean，执行1 => 5秒后，执行2，执行clean，执行1...
  // !可以看出，此时，无论是写setInterval，还是写setTimeout，效果是一样的
  // !count的值，从5一直递增

  // !如果写[]，同时写 setInterval的话，执行逻辑是：初始化执行1 => 5秒后，执行2 => 5秒后，执行2 => 5秒后，执行2 => 5秒后，执行2...
  // !count的值，从5到6后，然后就不变了

  // !如果写[]，同时写 setTimeout 的话，执行逻辑是：初始化执行1 => 5秒后，执行2
  // !count的值，从5到6后，然后就不变了

  useEffect(() => {
    console.log('执行1')
    const timer = setTimeout(() => {
      console.log('执行2')
      setCount(count + 1)
    }, 5000)
    return () => {
      clearTimeout(timer)
      console.log('clean')
    }
  }, [])

  return (
    <React.Fragment>
      <p
        key="count"
        onClick={() => {
          setCount(3)
        }}
      >
        {count}
      </p>
      <p
        key="familyName"
        onClick={() => {
          setFamilyName('chang')
        }}
      >
        {familyName}
      </p>
    </React.Fragment>
  )
}

Comp.defaultProps = {
  name: 'gsp',
}

export default Comp
