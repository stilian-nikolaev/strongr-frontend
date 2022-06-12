import React from 'react'
import { Box } from '@mantine/core'
import { AiOutlineDelete } from 'react-icons/ai'

export default function DeleteButton({ onClick, sx, size = '1.3vw' }) {
    return (
        <Box
            onClick={onClick}
            sx={{
                ...sx,
                height: 1,
                '&:hover': {
                    cursor: 'pointer'
                }
            }}>
            <AiOutlineDelete size={size} />
        </Box>
    )
}
