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

interface IThemeProps {
  [key: string]: { color: string; backGround: string }
}

const themes: IThemeProps = {
  light: {
    color: '#000',
    backGround: '#eee',
  },
  dark: {
    color: '#fff',
    backGround: '#222',
  },
}

export const ThemeContext = React.createContext(themes.dark)

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
      <ThemeContext.Provider value={themes.dark}>
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
      </ThemeContext.Provider>
    </div>
  )
}

export default App
