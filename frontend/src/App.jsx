import React, { useEffect, useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router"
import './App.css'
import axios from "axios"
import Products from './pages/Products'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Home from './pages/Home'
import About from './pages/About'
import SingleProduct from './pages/SingleProduct'
import ErrorPage from './pages/ErrorPage'
import Layout from './components/Layout'
import CategoryProduct from './pages/CategoryProduct'
import { useCart } from './context/CartContext'


export default function App() {
    const [location, setLocation] = useState()
    const [openDropdown, setOpenDropdown] = useState(false)
    const { cartItem, setCartItem } = useCart()

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

  
  //Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItem')
    if(storedCart){
      setCartItem(JSON.parse(storedCart))
    }
  }, []);

  //save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
  }, [cartItem])


  return (
     <>
       <Routes>
        {/* All normal pages go inside Layout (with Navbar + Footer) */}
        <Route
          element={
            <Layout
              location={location}
              getLocation={getLocation}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path='/category/:category' element={<CategoryProduct />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart/>}/>
        </Route>

        {/* ErrorPage outside Layout → No Navbar, No Footer */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
     </>
  )
}