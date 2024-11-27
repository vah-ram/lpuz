import { useState } from 'react'
import './App.css'
import { Header } from './Header/Header.jsx'
import { Footer } from './Footer/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Reside } from './Reside/Reside.jsx'
import AboutFunc from './About/About.jsx'

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Footer/>}/>
          <Route path='/residencies' element={<Reside/>}/>
          <Route path='/about' element={<AboutFunc/>}/>
        </Routes>
      </BrowserRouter>

    </> 
  )
}

export default App
