import { Box, Center, Text } from '@mantine/core'
import React from 'react'

export default function ErrorScreen() {
    return (
        <Center sx={{ height: '82vh' }}>
            <Box>
                <Text>Could not connect to the server.</Text>
                <Text> Our cat has probably messed up our computers again.</Text>
                <Text> Please excuse us for the inconvenience </Text>
            </Box>
        </Center>
    )
}

