import { Box, Center, SimpleGrid, Text } from '@mantine/core'
import React from 'react'

export default function PlanGrid() {
    return (
        <Box>
            <Box sx={{ display: 'flex', marginTop: '1vw' }}>
                <Box sx={{
                    paddingRight: '2vw',
                    paddingLeft: '1vw',
                    borderBottom: '2px solid black',
                }}>
                    <Text sx={{ fontSize: '2.4vw', }}>Your Plan</Text>
                </Box>
            </Box>
            <SimpleGrid cols={4} sx={{width: '20vw'}}>
                <Box sx={{ marginTop: '1vw'}}>
                <Center>
                    <Text sx={{fontSize: '1.6vw'}}>1</Text>
                </Center>
                <Center>
                        <Text sx={{ textAlign: 'center' }}>Pull day</Text>
                </Center>
                </Box>
                <Box sx={{ marginTop: '1vw' }}>
                    <Center>
                        <Text sx={{ fontSize: '1.6vw' }}>2</Text>
                    </Center>
                    <Center>
                        <Text sx={{ textAlign: 'center' }}>Push day</Text>
                    </Center>
                </Box>
                <Box sx={{ marginTop: '1vw' }}>
                    <Center>
                        <Text sx={{ fontSize: '1.6vw' }}>3</Text>
                    </Center>
                    <Center>
                        <Text sx={{ textAlign: 'center' }}>Leg day</Text>
                    </Center>
                </Box>
                <Box sx={{ marginTop: '1vw' }}>
                    <Center>
                        <Text sx={{ fontSize: '1.6vw' }}>4</Text>
                    </Center>
                    <Center>
                        <Text sx={{ textAlign: 'center' }}>Rest</Text>
                    </Center>
                </Box>
                <Box sx={{ marginTop: '1vw' }}>
                    <Center>
                        <Text sx={{ fontSize: '1.6vw' }}>5</Text>
                    </Center>
                    <Center>
                        <Text sx={{textAlign: 'center'}}>Ab workout</Text>
                    </Center>
                </Box>
            </SimpleGrid>
        </Box>
    )
}
