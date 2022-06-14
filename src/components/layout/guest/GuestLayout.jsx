import { Box } from '@mantine/core'
import React from 'react'
import NavHeader from './NavHeader'

export default function GuestLayout({ children }) {
  return (
    <Box>
      <NavHeader />
      {children}
    </Box>
  )
}
