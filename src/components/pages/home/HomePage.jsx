import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Image, Text } from '@mantine/core'

import GenericButton from '../../common/buttons/GenericButton'
import banner from '../../../assets/banner.png'

export default function HomePage() {
  const navigate = useNavigate();

  function handleGetStartedClick() {
    navigate('/login')
  }

  return (
    <Box sx={{ marginTop: '10vw', display: 'flex', placeContent: 'center' }}>
      <Box sx={{ width: '30vw', marginTop: '2vw' }}>
        <Text sx={{ fontSize: '2vw', fontWeight: 600 }}>Strongr helps you create your workout plan with ease.</Text>
          <GenericButton onClick={handleGetStartedClick} sx={{ color: 'white', marginLeft: '8vw', marginTop: '1.2vw'}}>
            Get started
          </GenericButton>
      </Box>
      <Box sx={{ width: '15vw', marginLeft: '5vw' }}>
        <Image src={banner} alt="Home banner" />
      </Box>
    </Box>
  )
}
