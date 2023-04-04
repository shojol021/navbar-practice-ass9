import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Prices from './components/Prices/Prices'
import Dashboard from './components/Dashboard/Dashboard'

function App() {  

  return (
    <div className="App">
      <Nav></Nav>
      <h1 className='text-4xl text-center text-purple-700'>Hello from tailwind</h1>
      <Prices></Prices>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App
