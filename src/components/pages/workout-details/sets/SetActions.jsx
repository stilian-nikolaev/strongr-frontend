import React from 'react'
import { Box } from '@mantine/core'

import EditButton from '../../../common/buttons/EditButton'
import DeleteButton from '../../../common/buttons/DeleteButton'

export default function SetActions({ onEditClick, onDeleteClick }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <EditButton onClick={onEditClick}
                sx={{
                    marginLeft: '0.3vw',
                    marginTop: '0.1vw'
                }} />
            <DeleteButton onClick={onDeleteClick}  sx={{ marginLeft: '0.3vw'}}/>
        </Box>
    )
}