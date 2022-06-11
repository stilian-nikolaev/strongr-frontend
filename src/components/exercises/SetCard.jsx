import { Box, Text } from '@mantine/core'
import React from 'react'
import { FiEdit2 } from 'react-icons/fi'

export default function SetCard({ set }) {
    return (
        <Box
            sx={{
                display: 'flex',
                '&:hover': {
                    '& .edit': {
                        display: 'block'
                    }
                }
            }}>
            <Text sx={{ fontSize: '1.2vw' }} >
                {set.amount} reps {set.weight > 0 ? `with ${set.weight} kg` : ''}
            </Text>
            <Box className="edit" sx={{
                display: 'none',
                marginLeft: '0.3vw',
                marginTop: '0.1vw',
                height: 1,
                '&:hover': {
                    cursor: 'pointer'
                }
            }}>
                <FiEdit2 size={'1.2vw'} />
            </Box>
        </Box>
    )
}
