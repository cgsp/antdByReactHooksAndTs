import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { debounce } from 'lodash-es'
interface IProps {
  name: string
}

const Comp: React.FC<IProps> = ({ name }) => {
  const [query, setQuery] = useState('react')
  const [hit, setHit] = useState('')

  const getFetchUrl = (query: string) => {
    return `https://hn.algolia.com/api/v1/search?query=${query}`
  }

  // const handleChange = debounce((value) => {
  //   console.log(value)
  //   setQuery((preQuery) => value)
  // }, 200)

  const handleChange = useCallback(
    debounce((value) => {
      console.log(value)
      setQuery((preQuery) => value)
    }, 200),
    []
  )

  const fetch = async (didClean: boolean) => {
    const res = await axios(getFetchUrl(query))
    if (!didClean) setHit(res.data.nbHits)
  }

  useEffect(() => {
    let didClean = false

    fetch(didClean)

    return () => {
      didClean = true
    }
  }, [query])

  return (
    <div>
      <p>hit: {hit}</p>
      <p>query: {query}</p>
      <input
        type="text"
        onChange={(e) => e.target.value && handleChange(e.target.value)}
      />
    </div>
  )
}

Comp.defaultProps = {
  name: 'gsp',
}

export default Comp
