import { UnstyledButton } from '@mantine/core'
import React from 'react'

export default function GenericButton({ children, sx, ...props }) {
    return (
        <UnstyledButton
            px='1.5vw'
            py='0.7vw'
            sx={(theme) => ({
                color: theme.colors.brand[0],
                borderRadius: 5,
                backgroundColor: theme.colors.brand[1],
                fontSize: '0.8vw',
                fontWeight: 100,
                textAlign: 'center',
                '&:hover': {
                    backgroundColor: theme.fn.lighten(theme.colors.brand[1], 0.04)
                },
                ...sx
            })}
            {...props}
        >
            {children}
        </UnstyledButton>
    )
}
