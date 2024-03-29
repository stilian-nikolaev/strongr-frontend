import React from 'react'
import { Box, Text } from '@mantine/core'

import AddWorkoutButton from './AddWorkoutButton'

export default function GridHeader() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <Box sx={(theme) => ({
                borderBottom: `2px solid ${theme.colors.common[0]}`,
                paddingRight: '2vw',
                paddingLeft: '1vw',
            })}>
                <Text sx={{ fontSize: '2.4vw', }}>Your Workouts</Text>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AddWorkoutButton />
            </Box>
        </Box>
    )
}