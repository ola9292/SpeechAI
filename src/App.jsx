import { useState } from 'react'
import Home from './Home'
import SpeechToText from './SpeechToText'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"
import './index.css'
function App() {
 

  return (
    <div className="App">
      <Navbar />
  
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="totext" element={ <SpeechToText/> } />
       
      </Routes>
    </div>
  )
}

export default App
