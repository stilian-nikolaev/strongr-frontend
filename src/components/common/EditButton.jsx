import { Box } from '@mantine/core'
import React from 'react'
import { FiEdit2 } from 'react-icons/fi'

export default function EditButton({ onClick, sx, size = '1.2vw' }) {
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
            <FiEdit2 size={size} />
        </Box>
    )
}
