import React, { useEffect } from 'react'
import { Aside, Avatar, Box, Button, Container, Text } from '@mantine/core'

import { AuthStore } from '../../stores/AuthStore'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/user'
import { useAvatar } from '../../hooks/avatar';

export default function SideBar() {
    const { logout } = AuthStore
    const navigate = useNavigate();
    const { data } = useUser();
    const src = useAvatar(data?.avatarId)
    
    function onSignOutClick() {
        logout()
        navigate('/')
    }

    return (
        <Aside width={{ base: '20vw' }} sx={{ alignItems: 'center' }}>
            <Box sx={{ marginTop: '4vw' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        src={src}
                        size="10vw"
                        radius="50%"
                        alt="Username"
                        sx={{
                            backgroundColor: data?.avatarColor,
                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
                        }} />
                </Box>
                <Text sx={{
                    marginTop: '1vw',
                    fontSize: '1.4vw',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    {data?.name}
                </Text>
                <Text
                    sx={theme => ({
                        marginTop: '0.1vw',
                        fontSize: '1vw',
                        textAlign: 'center',
                        color: theme.colors.common[1]
                    })}>
                    {data?.activity}
                </Text>
                <Button
                    onClick={onSignOutClick}
                    sx={theme => ({
                        marginTop: '1vw',
                        backgroundColor: theme.colors.main[0],
                        color: theme.colors.common[0],
                        borderRadius: 10,
                        width: '10vw',
                        height: '3vw',
                        '&:hover': {
                            backgroundColor: theme.fn.darken(theme.colors.main[0], 0.03),
                        }
                    })}>
                    <Text sx={{ fontSize: '1vw' }}>Sign out</Text>
                </Button>
            </Box>
        </Aside>
    )
}
