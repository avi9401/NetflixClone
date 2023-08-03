import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider }  from './context/AuthContext'
import Home from './pages/Home'
import Account from './pages/Account'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'


const App = () => {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={
          <ProtectedRoute> <Account /> </ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
