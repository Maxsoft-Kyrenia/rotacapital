import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage'

const Layout = () => {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage/>}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default Layout