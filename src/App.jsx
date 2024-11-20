import React from 'react'
import './App.css';
import Home from "./Pages/Home"
import {Routes,Route} from "react-router-dom"
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Signup from "./Pages/Signup"

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
