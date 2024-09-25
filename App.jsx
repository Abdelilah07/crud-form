import { useState } from 'react'
import {Route, Routes, Router} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Products from './Products'
import SignUp from './SignUp'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </>
  )
}

export default App
