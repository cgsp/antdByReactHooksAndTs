import React, { useState } from 'react'
import logo from './logo.svg'
import Hello from './components/Hello'
import LinkButton from './components/LinkButton'
import useMousePosition from './hooks/useMousePosition'
import withLoader from './components/Hoc/withLoader'
import useLoader from './hooks/useLoader'
import './App.scss'

interface IShowResult {
  name: string
}

const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
  return (
    <React.Fragment>
      <h2>dog show:{data.name}</h2>
    </React.Fragment>
  )
}

function App() {
  const [showMouseTracker, setShowMouseTracker] = useState(true)
  const positions = useMousePosition()
  const WrapedDogShow = withLoader(DogShow)

  const { data, loading } = useLoader([])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => setShowMouseTracker(!showMouseTracker)}>
            toggle showMouseTracker
          </button>
        </p>
        <Hello />
        <p>
          x:{positions.x}，y:{positions.y}
        </p>
        <WrapedDogShow />
        {loading ? '加载中...' : data && data.name}
        <LinkButton />
      </header>
    </div>
  )
}

export default App
