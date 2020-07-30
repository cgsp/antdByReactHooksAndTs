import React from 'react'
import logo from './logo.svg'
import Hello from './components/Hello'
import LinkButton from './components/LinkButton'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Hello />
        <LinkButton />
      </header>
    </div>
  )
}

export default App
