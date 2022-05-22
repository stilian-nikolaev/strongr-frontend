import React from 'react'
import { Aside, Avatar, Container, Text } from '@mantine/core'

import avatar from '../../../images/avatar.jpg'

export default function SideBar() {
    return (
        <Aside width={{ base: '20vw' }} sx={{ alignItems: 'center' }}>
            <Container sx={{ padding: 0, marginTop: '4vw' }}>
                <Container sx={{ padding: 0, display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        src={avatar}
                        size="10vw"
                        radius="50%"
                        alt="Username"
                        sx={{
                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
                        }} />
                </Container>
                <Text sx={{
                    marginTop: '1vw',
                    fontSize: '1.4vw',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Stilian Nikolaev
                </Text>
                <Text sx={{
                    marginTop: '0.1vw',
                    fontSize: '1vw',
                    textAlign: 'center',
                    color: 'grey'
                }}>
                    Gym lover
                </Text>
            </Container>
        </Aside>
    )
}
