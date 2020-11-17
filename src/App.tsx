import React from 'react'
import getGspName from '@/utils/getGspName'
// import HooksCounter from '@/hooks'
import HooksCounter from '@/hooks/HooksCounter'
// import ClassComp from '@/hooks/ClassComp'
import { isDev } from '@/utils'
import './App.scss'
// library.add(faCheckSquare, faCoffee)

console.log(getGspName(), isDev)
console.log('BUILD_ENV', process.env.REACT_APP_BUILD_ENV)

function App() {
  return (
    <div className="app" data-testid="testAppId">
      <HooksCounter name={'gsp'} />
      {/* <ClassComp /> */}
    </div>
  )
}

export default App
