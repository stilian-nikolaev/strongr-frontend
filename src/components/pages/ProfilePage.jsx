import { Box, Text } from '@mantine/core'
import React from 'react'

export default function ProfilePage() {
    return (
        <Box sx={{display: 'flex'}}>
            <Box sx={{
                marginTop: '1vw',
                paddingRight: '2vw',
                paddingLeft: '1vw',
                borderBottom: '2px solid black',
            }}>
                <Text sx={{ fontSize: '2.4vw', }}>Your Profile</Text>
            </Box>
        </Box>
    )
}
