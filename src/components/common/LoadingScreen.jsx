import React from 'react'
import { Center, Loader } from '@mantine/core'

export default function LoadingScreen() {
    return (
        <Center sx={{ height: '82vh' }}>
            <Loader color="dark" variant="dots" />
        </Center>
    )
}