import { Box } from '@mantine/core'
import React from 'react'
import NavHeader from './NavHeader'

export default function Layout({ children }) {
  return (
    <Box>
      <NavHeader />
      {children}
    </Box>
  )
}
