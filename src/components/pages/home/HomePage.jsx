import { Box, Center, Image, Text } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import banner from '../../../assets/banner.png'
import GenericButton from '../../common/buttons/GenericButton'

export default function HomePage() {
  const navigate = useNavigate();

  function onGetStartedClick() {
    navigate('/register')
  }

  return (
    <Box sx={{ marginTop: '10vw', display: 'flex', placeContent: 'center' }}>
      <Box sx={{ width: '30vw', marginTop: '2vw' }}>
        <Text sx={{ fontSize: '2vw', fontWeight: 600 }}>Strongr helps you create your workout plan with ease.</Text>
          <GenericButton onClick={onGetStartedClick} sx={{ color: 'white', marginLeft: '8vw', marginTop: '1.2vw'}}>
            Get started
          </GenericButton>
      </Box>
      <Box sx={{ width: '15vw', marginLeft: '5vw' }}>
        <Image src={banner} alt="Home banner" />
      </Box>
    </Box>
  )
}
