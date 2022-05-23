import { Box, Text } from '@mantine/core'
import React from 'react'
import AddWorkoutButton from './AddWorkoutButton'

export default function GridHeader() {
  return (
      <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
      }}>
          <Box sx={{
              paddingRight: '2vw',
              paddingLeft: '1vw',
              borderBottom: '2px solid black',
          }}>
              <Text sx={{ fontSize: '2.4vw', }}>Your Workouts</Text>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AddWorkoutButton />
          </Box>
      </Box>
  )
}
