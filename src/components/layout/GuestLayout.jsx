import React from 'react'
import { Avatar, Box, Button, Header, Image, Text } from '@mantine/core'
import logo from '../../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';

export default function GuestLayout({ children }) {
  const navigate = useNavigate();

  function onLogInClick() {
    navigate('/login')
  }

  function onLogoClick() {
    navigate('/')
  }


  return (
    <Box>
      <Header sx={(theme) => ({ boxShadow: theme.shadows.sm })} py="md" px="xl">
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', }}>
          <Avatar
            src={logo}
            alt="logo"
            size="4.4vw"
            radius="50%"
            onClick={onLogoClick}
            sx={(theme) => ({ border: `2px solid ${theme.colors.common[0]}`, cursor: 'pointer' })} />
          <Text sx={{ fontSize: 30, fontWeight: 'bold' }}>Strongr</Text>
          <Button onClick={onLogInClick} color="dark" radius="lg">Log in</Button>
        </Box>
      </Header>
      {children}
    </Box>
  )
}
