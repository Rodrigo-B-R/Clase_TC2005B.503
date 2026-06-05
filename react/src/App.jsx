import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Count} from './components/Count'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import { useNavigate } from 'react-router-dom'  
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  
  

  
  //let count = 0;

  return (

  

    <>
    

        <BrowserRouter>

          <Nav></Nav>
          <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/counter' element={<Count/>} />


          </Routes>

          
          <Footer></Footer>
          

          
          
        </BrowserRouter>
        {/* <h1>Hola desed REACT </h1>
        <Count></Count>
        <Count/>
        <Count/>
        <Count/> */}



    </>


  )
}

export default App
