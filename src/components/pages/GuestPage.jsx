import React from 'react'
import { Center, Text } from '@mantine/core'
import { ViewStore } from '../../stores/ViewStore'
import LoginPage from '../auth/LoginPage'
import { observer } from 'mobx-react'
import RegisterPage from '../auth/RegisterPage'

export default observer(function GuestPage() {
  const { view } = ViewStore
  
  
    switch (view) {
      case 'home':
        return <Center style={{ height: '80vh' }}>
          <Text sx={{ fontSize: 20 }}>Gym app helps you create your personalised workout and meal plans.</Text>
        </Center>
      case 'login':
        return <LoginPage />
      case 'register':
        return <RegisterPage />
      default:
        return <Center style={{ height: '80vh' }}>
          <Text sx={{ fontSize: 20 }}>Gym app helps you create your personalised workout and meal plans.</Text>
        </Center>
    }
})
