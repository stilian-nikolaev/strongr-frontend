import React from 'react'
import { Avatar, Center, Image, List, ListItem, MenuItem, Navbar, Text, ThemeIcon } from '@mantine/core'
import logo from '../../../images/logo.jpg'
import Menu from './Menu'

export default function SideBar() {
    return (
        <Navbar px="1vw" py="2vh" width={{ base: '15vw' }}>
            <Navbar.Section sx={{ display: 'flex', marginTop: 15, '&:hover': { cursor: 'pointer' } }}>
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
            <Navbar.Section grow mt="10vh" ml="sm">
                <Menu />
            </Navbar.Section>
        </Navbar>
    )
}
