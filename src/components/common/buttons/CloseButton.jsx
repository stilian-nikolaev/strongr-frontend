import { UnstyledButton } from '@mantine/core'
import React from 'react'
import { MdClose } from 'react-icons/md'

export default function CloseButton({ onClick, sx, size = "1.5vw" }) {
    return (
        <UnstyledButton
            onClick={onClick}
            sx={{
                ...sx,
                height: 1,
                '&:hover': {
                    cursor: 'pointer'
                }
            }}>
            <MdClose size={size} />
        </UnstyledButton>
    )
}
