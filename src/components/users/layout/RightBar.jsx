import { Aside, Avatar, Center, Container, Text } from '@mantine/core'
import React from 'react'
import avatar from '../../../images/avatar.jpg'

export default function RightBar() {
    return (
        <Aside width={{ base: '20vw' }} sx={{ alignItems: 'center' }}>
            <Container sx={{ padding: 0, marginTop: 50 }}>
                <Container sx={{padding: 0, display:'flex',justifyContent: 'center'}}>
                    <Avatar src={avatar} size={100} radius={50} alt="Username" sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
                        }}/>
                </Container>
                <Text sx={{ marginTop: 10, fontSize: 18, fontWeight:'bold' }}>Stilian Nikolaev</Text>
            </Container>
        </Aside>
    )
}
