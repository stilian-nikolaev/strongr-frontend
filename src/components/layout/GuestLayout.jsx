import React from 'react'
import { Avatar, Box, Button, Header, Image, Text } from '@mantine/core'
import logo from '../../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { useEffect } from 'react';
import GenericButton from '../common/buttons/GenericButton';

export default function GuestLayout({ children }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient()

  useEffect(() => {
    queryClient.clear();
  }, [queryClient])


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
          <GenericButton
            onClick={onLogInClick}
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
