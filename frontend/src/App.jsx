import React, { useEffect, useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router"
import './App.css'
import axios from "axios"
import Products from './pages/Products'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"

export default function App() {
    const [location, setLocation] = useState()
    const [openDropdown, setOpenDropdown] = useState(false)

    const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation)
        setOpenDropdown(false)
      } catch (error) {
        console.log(error);
      }
    })
  }

  useEffect(() => {
    getLocation()
  }, [])
  return (
    <>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}