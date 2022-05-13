import React from 'react'
import { Center, Image, List, ListItem, MenuItem, Navbar, Text, ThemeIcon } from '@mantine/core'
import avatar from '../../../images/avatar.jpg'
import Menu from './Menu'

export default function SideBar() {
    return (
        <Navbar p="xs" width={{ base: '15vw' }}>
            <Navbar.Section sx={{ display: 'flex' }} ml={10} mt={'2vh'}>
                <Image src={avatar} width={'4.5vw'} radius={50} />
                <Center>
                    <Text sx={theme => ({ marginLeft: '1vw', fontWeight: 'bold', fontSize: '1vw' })}>Stilian Nikolaev</Text>
                </Center>
            </Navbar.Section>
            <Navbar.Section grow mt="10vh" ml="sm">
                <Menu/>
            </Navbar.Section>
        </Navbar>
    )
}
