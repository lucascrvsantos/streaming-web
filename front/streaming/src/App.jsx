import './App.css'
import * as React from 'react'
import NavBar from './Components/Navbar'
import Hello from './Components/Hello'
import Recommended from './Components/Recomended'


function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Hello />
      <Recommended />
    </>
  )
}

export default App
