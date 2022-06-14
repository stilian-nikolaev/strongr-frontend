import { UnstyledButton } from '@mantine/core'
import React from 'react'

export default function AuthFormButton({children, sx, ...props}) {
  return (
      <UnstyledButton
          {...props}
          px='20px'
          py='12px'
          sx={{
            ...sx,
              color: 'pink',
              borderRadius: 5,
              backgroundColor: 'black',
              fontSize: '16px',
              fontWeight: 100,
              '&:hover': {
                  backgroundColor: '#191919'
              }
          }}>
          {children}
      </UnstyledButton>
  )
}
