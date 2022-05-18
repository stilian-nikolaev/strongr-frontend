import { ActionIcon, Card, Center, Container, Text } from '@mantine/core'
import React from 'react'
import { MdClose } from 'react-icons/md'

export default function Workout({onBackClick}) {
    return (
        <Center>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', width: '60vw', marginTop: 20 }}>
                <Card px={30} sx={{ backgroundColor: 'pink' }} shadow="sm">
                    <Text sx={{ fontSize: '1.5rem' }}>Pull day</Text>
                    <Text>Exercises: 8</Text>
                    <Text>Sets: 16</Text>
                </Card>
                <ActionIcon onClick={onBackClick} radius={50} sx={{
                    border: '1px solid black', backgroundColor: 'pink', '&:hover': {
                        backgroundColor: '#F9BDC5'
                    }
                }}>
                    <MdClose size={30} />
                </ActionIcon>
            </Container>
        </Center>
    )
}
