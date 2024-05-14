import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Productes from './pages/Productes/Productes'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Cart from './pages/Cart/Cart'
import Category from './pages/Category/Category'
import ProductDetails from './pages/ProductDetails/ProductDetails'

function App() {
 
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Productes/>}></Route>
      <Route path='/about-us' element={<AboutUs/>}></Route>
      <Route path='/contact-us' element={<ContactUs/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/products' element={<Productes/>}></Route>
      <Route path='/category/:catId' element={<Category/>}></Route>
      <Route path='/product/:pdId' element={<ProductDetails/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
