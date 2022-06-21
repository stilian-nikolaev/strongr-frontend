import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../HomePage'
import LoginPage from '../LoginPage'
import RegisterPage from '../RegisterPage'

export default function GuestPage() {
  return <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
  </Routes>
}
