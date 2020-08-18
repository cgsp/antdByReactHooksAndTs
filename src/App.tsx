import React from 'react'
import './App.scss'
import getGspName from '@utils/getGspName.js'

console.log(getGspName())
console.log('BUILD_ENV', process.env.REACT_APP_BUILD_ENV)

function App() {
  return (
    <div className="app">
      <code>const a = 'a'</code>
    </div>
  )
}

export default App
