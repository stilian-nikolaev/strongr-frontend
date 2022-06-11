import { Box } from '@mantine/core'
import React from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

export default function SetActions({onEditClick, onDeleteClick}) {
    return (
        <Box sx={{display: 'flex'}}>
            <Box
                onClick={onEditClick}
                sx={{
                    marginLeft: '0.3vw',
                    marginTop: '0.1vw',
                    height: 1,
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }}>
                <FiEdit2 size={'1.2vw'} />
            </Box>
            <Box
                onClick={onDeleteClick}
                sx={{
                    marginLeft: '0.3vw',
                    height: 1,
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }}>
                <AiOutlineDelete size={'1.3vw'} />
            </Box>
        </Box>
    )
}
