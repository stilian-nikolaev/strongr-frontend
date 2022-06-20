import React from 'react'
import { Aside, Avatar, Box, Button, Container, Text } from '@mantine/core'

import avatar from '../../../images/avatar.jpg'
import { AuthStore } from '../../../stores/AuthStore'

export default function SideBar() {
    const { logout } = AuthStore

    function onSignOutClick() {
        logout()
    }

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
                <Button
                    onClick={onSignOutClick}
                    sx={{
                        marginTop: '1vw',
                        backgroundColor: 'pink',
                        color: 'black',
                        borderRadius: 10,
                        width: '10vw',
                        height: '3vw',
                        '&:hover': {
                            backgroundColor: '#ffccd5',
                        }
                    }}>
                    <Text sx={{ fontSize: '1vw' }}>Sign out</Text>
                </Button>
            </Container>
        </Aside>
    )
}
