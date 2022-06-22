import React from 'react'
import { Avatar, Navbar, Text } from '@mantine/core'

import Menu from './Menu'
import logo from '../../images/logo.jpg'
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

export default observer(function NavigationBar() {
    const navigate = useNavigate()

    function onLogoClick() {
        navigate('/workouts')
    }

    return (
        <Navbar width={{ base: '15vw' }}>
            <Navbar.Section
                onClick={onLogoClick}
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
                    sx={{ border: '2px solid black' }} />
                <Text sx={({
                    marginLeft: '1vw',
                    fontWeight: 'bold',
                    fontSize: '1.8vw',
                    alignSelf: 'center'
                })}>Strongr</Text>
            </Navbar.Section>
            <Navbar.Section grow mt="5vw" ml={20}>
                <Menu />
            </Navbar.Section>
        </Navbar>
    )
})