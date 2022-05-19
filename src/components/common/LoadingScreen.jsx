import { Center, Loader } from '@mantine/core'
import React from 'react'

export default function LoadingScreen() {
    return (
        <Center sx={{ height: '82vh' }}>
            <Loader color="dark" variant="dots" />
        </Center>
    )
}
