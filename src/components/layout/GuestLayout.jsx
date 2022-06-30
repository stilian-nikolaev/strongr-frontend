import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { Avatar, Box, Header, Text } from '@mantine/core'

import GenericButton from '../common/buttons/GenericButton';
import logo from '../../assets/logo.jpg'

export default function GuestLayout({ children }) {
  const queryClient = useQueryClient()
  const navigate = useNavigate();

  useEffect(() => {
    queryClient.clear();
  }, [queryClient])

  function handleLogInClick() {
    navigate('/login')
  }

  function handleLogoClick() {
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
            onClick={handleLogoClick}
            sx={(theme) => ({ border: `2px solid ${theme.colors.common[0]}`, cursor: 'pointer' })} />
          <Text sx={{ fontSize: 30, fontWeight: 'bold' }}>Strongr</Text>
          <GenericButton
            onClick={handleLogInClick}
            px={20}
            py={10}
            sx={{ color: 'white', borderRadius: 25, fontWeight: 600 }}>
            Log in
          </GenericButton>
        </Box>
      </Header>
      {children}
    </Box>
  )
}
