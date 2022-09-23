import React from 'react'
import { Routes, Route} from 'react-router-dom'
import AboutPage from '../Pages/AboutPage'
import Bultenler from '../Pages/Bultenler'
import ContactPage from '../Pages/ContactPage'
import DemoPage from '../Pages/DemoPage'
import Homepage from '../Pages/Homepage'

const Layout = () => {
  return (
      <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/demo' element={<DemoPage/>}></Route>
          <Route path='/butlener' element={<Bultenler/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
      </Routes>
  )
}

export default Layout