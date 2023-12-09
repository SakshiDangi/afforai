import React from "react"
import { Link, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Nav/Navbar"
import Home from "./pages/Home"
import Hero from "./components/hero/Hero"
import Button from "./components/ui/Button"
import './main.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
