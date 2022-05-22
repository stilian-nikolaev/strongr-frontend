import React from 'react'
import { Avatar, Navbar, Text } from '@mantine/core'

import Menu from './Menu'
import logo from '../../../images/logo.jpg'

export default function NavigationBar() {
    return (
        <Navbar width={{ base: '15vw' }}>
            <Navbar.Section sx={{
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
}
