import React from 'react'
import { Routes, Route} from 'react-router-dom'
import AboutPage from '../Pages/AboutPage'
import Bultenler from '../Pages/Bultenler'
import ContactPage from '../Pages/ContactPage'
import DemoPage from '../Pages/DemoPage'
import Homepage from '../Pages/Homepage'
import Politikasi from '../Pages/Politikasi'
import Platform from '../Pages/Platform'
import Service from '../Pages/Service'

const Layout = () => {
  return (
      <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/demo' element={<DemoPage/>}></Route>
          <Route path='/butlener' element={<Bultenler/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='/politikasi' element={<Politikasi/>}></Route>
          <Route path='/platform' element={<Platform/>}></Route>
          <Route path='/services' element={<Service/>}></Route>
      </Routes>
  )
}

export default Layout