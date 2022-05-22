import React from 'react'
import { Avatar, Navbar, Text } from '@mantine/core'

import Menu from './Menu'
import logo from '../../../images/logo.jpg'

export default function NavigationBar() {
    return (
        <Navbar width={{ base: '15vw' }}>
            <Navbar.Section sx={{ display: 'flex', marginLeft: 15, marginTop: 20, '&:hover': { cursor: 'pointer' } }}>
                <Avatar src={logo} alt="logo" size="4.4vw" radius={50} sx={{
                    marginLeft: '5px',
                    border: '2px solid black'
                }} />
                <Text sx={({
                    marginLeft: '1vw',
                    fontWeight: 'bold',
                    fontSize: '1.8vw',
                    alignSelf: 'center'
                })}>Strongr</Text>
            </Navbar.Section>
            <Navbar.Section grow mt="10vh" ml={20}>
                <Menu />
            </Navbar.Section>
        </Navbar>
    )
}
