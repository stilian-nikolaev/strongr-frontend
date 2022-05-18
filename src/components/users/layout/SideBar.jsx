import React from 'react'
import { Avatar, Center, Image, List, ListItem, MenuItem, Navbar, Text, ThemeIcon } from '@mantine/core'
import logo from '../../../images/logo.jpg'
import avatar from '../../../images/avatar.jpg'
import Menu from './Menu'

export default function SideBar() {
    return (
        <Navbar p="xs" width={{ base: '15vw' }}>
            <Navbar.Section sx={{ display: 'flex', marginTop: 15}}>
                <Avatar src={logo} size={60} radius={50} sx={{border: '2px solid black'}} />
                <Center>
                    <Text sx={({ marginLeft: '1vw', fontWeight: 'bold', fontSize: '1.5rem' })}>Strongr</Text>
                </Center>
            </Navbar.Section>
            <Navbar.Section grow mt="10vh" ml="sm">
                <Menu/>
            </Navbar.Section>
        </Navbar>
    )
}
