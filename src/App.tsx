import React, { useState } from 'react'
import logo from './logo.svg'
import Hello from './components/Hello'
import useMousePosition from './hooks/useMousePosition'
import './App.scss'

function App() {
  const [showMouseTracker, setShowMouseTracker] = useState(true)
  const positions = useMousePosition()

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
      </header>
    </div>
  )
}

export default App
