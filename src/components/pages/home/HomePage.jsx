import { Box, Center, Text } from '@mantine/core'
import React from 'react'

export default function HomePage() {
  return (
    <Center style={{ height: '80vh' }}>
      <Box sx={{width: '30vw'}}>
        <Text sx={{ fontSize: '2vw' }}>Strongr helps you create your workout plan with ease.</Text>
        <Text sx={{ fontSize: '1.2vw' }}>Create unlimited workouts with different exercises and sets by your choice</Text>
      </Box>
    </Center>
  )
}
