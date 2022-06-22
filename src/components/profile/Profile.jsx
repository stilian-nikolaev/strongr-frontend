import { Box, Text } from '@mantine/core'
import React from 'react'
import AvatarSection from './AvatarSection'

export default function Profile() {
  return (
      <Box>
          <Box sx={{ display: 'flex' }}>
              <Box sx={{
                  marginTop: '1vw',
                  paddingRight: '2vw',
                  paddingLeft: '1vw',
                  borderBottom: '2px solid black',
              }}>
                  <Text sx={{ fontSize: '2.4vw', }}>Your Profile</Text>
              </Box>
          </Box>
            <AvatarSection/>
          <Box sx={{ marginTop: '2vw', marginLeft: '1vw' }}>
              <Text sx={{ fontSize: '1.4vw', }}>Stilian Nikolaev</Text>
          </Box>
          <Box sx={{ marginTop: '1vw', marginLeft: '1vw' }}>
              <Text sx={{ fontSize: '1.4vw', }}>Gym lover</Text>
          </Box>
      </Box>
  )
}
