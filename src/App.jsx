import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Outlet } from 'react-router-dom'

function App() {
  return (
     <div className="App">
        <NavBar />
        <Outlet />
    </div>
  )
}

export default App
