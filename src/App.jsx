import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
// import Slideimg from './components/Slideimg'
import Dashboard from './pages/Dashboard'
import Bestsellers from './pages/Bestsellers'
import Fashion from './pages/Fashion'
import Fresh from './pages/Fresh'
import Mobiles from './pages/Mobiles'
import Trending from './pages/Trending'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      

      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/Bestsellers' element={<Bestsellers/>}></Route>
        <Route path='/Fashion' element={<Fashion/>}></Route>
        <Route path='/Fresh' element={<Fresh/>}></Route>
        <Route path='/Mobiles' element={<Mobiles/>}></Route>
        <Route path='/Trending' element={<Trending/>}></Route>
      </Routes>

      <Footer/>
      
      </BrowserRouter>


    </div>
  )
}

export default App
