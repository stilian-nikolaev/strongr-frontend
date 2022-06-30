import React from 'react'
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Avatar, Navbar, Text } from '@mantine/core'

import Menu from './Menu'
import logo from '../../assets/logo.jpg'

export default observer(function NavigationBar() {
    const navigate = useNavigate()

    function handleLogoClick() {
        navigate('/workouts')
    }

    return (
        <Navbar width={{ base: '15vw' }} sx={{ zIndex: 0 }}>
            <Navbar.Section
                onClick={handleLogoClick}
                sx={{
                    display: 'flex',
                    marginLeft: '1.5vw',
                    marginTop: '1.5vw',
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }}>
                <Avatar
                    src={logo}
                    alt="logo"
                    size="4.4vw"
                    radius="50%"
                    sx={(theme) => ({ border: `2px solid ${theme.colors.common[0]}` })} />
                <Text sx={({
                    marginLeft: '1vw',
                    fontWeight: 'bold',
                    fontSize: '1.8vw',
                    alignSelf: 'center'
                })}>
                    Strongr
                </Text>
            </Navbar.Section>
            <Navbar.Section grow mt="5vw" ml={20}>
                <Menu />
            </Navbar.Section>
        </Navbar>
    )
})
