import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Home, About, Gallery, Contact, NotFound, Services, Careers } from './pages';
import CustomCursor from './components/CustomCursor';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <CustomCursor/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/careers' element={<Careers/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App