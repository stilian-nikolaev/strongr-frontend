import React from 'react'
import { Center, Text } from '@mantine/core'
import { ViewStore } from '../../stores/ViewStore'
import LoginPage from '../auth/LoginPage'
import { observer } from 'mobx-react'
import RegisterPage from '../auth/RegisterPage'
import { Route, Routes } from 'react-router-dom'

export default observer(function GuestPage() {
  return <Routes>
    <Route path='/' element={
      <Center style={{ height: '80vh' }}>
        <Text sx={{ fontSize: 20 }}>Gym app helps you create your personalised workout and meal plans.</Text>
      </Center>} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
  </Routes>
})
