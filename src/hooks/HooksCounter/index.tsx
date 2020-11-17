import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { throttle } from 'lodash-es'
interface IProps {
  name: string
}

const Comp: React.FC<IProps> = ({ name }) => {
  const [query, setQuery] = useState('react')

  const getFetchUrl = (query: string) => {
    return `https://hn.algolia.com/api/v1/search?query=${query}`
  }
  // 对于这样一个组件，如果我们改变了query，按理来说应该要重新拉取数据，但是这种写法里面就无法实现，除非在useEffect的dependency数组里面添加一个query，但是这样是很不明显的，因为useEffect里面的函数只写了一个fetchData，并没有看到query的身影，所以query很容易被忽略，而一旦忽略就会带来bug，所以简单的解决方法就是把fetchData这个函数作为dependency写进useEffect的dependency数组，但是这样也会带来问题，就是每次render之后，无论这次render是否改变了query，都会导致fetchData这个函数发生变化（因为每次render之后函数都是不同的），都会重新拉取数据，这是我们不想要的结果

  async function fetchData() {
    console.log('fetchData')
    const result = await axios(getFetchUrl(query))
    console.log(result)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target && console.log('value', e.target.value)
  }

  useEffect(() => {
    fetchData()
  }, [query])

  return (
    <div>
      <p>{query}</p>
      <input type="text" onChange={throttle(handleChange, 200)} />
    </div>
  )
}

Comp.defaultProps = {
  name: 'gsp',
}

export default Comp
