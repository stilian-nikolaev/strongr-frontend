import React from 'react'
import { UnstyledButton } from '@mantine/core'

export default function GenericButton({ children, sx, ...props }) {
    return (
        <UnstyledButton
            px='1.5vw'
            py='0.7vw'
            sx={(theme) => ({
                color: theme.colors.main[0],
                borderRadius: 5,
                backgroundColor: theme.colors.common[0],
                fontSize: '0.8vw',
                fontWeight: 100,
                textAlign: 'center',
                '&:hover': {
                    backgroundColor: theme.fn.lighten(theme.colors.common[0], 0.04)
                },
                ...sx
            })}
            {...props}
        >
            {children}
        </UnstyledButton>
    )
}