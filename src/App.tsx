import React from 'react'
import getGspName from '@utils/getGspName.js'
import Button, { ButtonType, ButtonSize } from '@components/Button'
import './App.scss'

console.log(getGspName())
console.log('BUILD_ENV', process.env.REACT_APP_BUILD_ENV)

function App() {
  return (
    <div className="app">
      <Button disabled btnType={ButtonType.Danger} size={ButtonSize.Small}>
        我是按钮
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Large}
        href="http://www.baidu.com"
        disabled
      >
        我是按钮
      </Button>
    </div>
  )
}

export default App
