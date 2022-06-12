import { UnstyledButton } from '@mantine/core'
import React from 'react'

export default function ModalButton({children, ...props}) {
  return (
      <UnstyledButton
         {...props}  
          px='1.5vw'
          py='0.7vw'
          sx={{
              color: 'pink',
              borderRadius: 5,
              backgroundColor: 'black',
              fontSize: '0.8vw',
              fontWeight: 100,
              '&:hover': {
                  backgroundColor: '#191919'
              }
          }}>
          {children}
      </UnstyledButton>
  )
}
