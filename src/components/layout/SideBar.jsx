import React from 'react'
import { Center, Image, List, ListItem, Menu, MenuItem, Navbar, Text, ThemeIcon } from '@mantine/core'
import avatar from '../../images/avatar.jpg'
import dumbbellIcon from '../../images/dumbbell.png';

export default function SideBar() {
    return (
        <Navbar p="xs" width={{ base: '17vw' }} mt={'2vh'}>
            <Navbar.Section sx={{ display: 'flex' }} ml={10}>
                <Image src={avatar} width={'4.5vw'} radius={50} />
                <Center>
                    <Text sx={{marginLeft: '1vw', fontWeight: 'bold'}}>Stilian Nikolaev</Text>
                </Center>
            </Navbar.Section>
            <Navbar.Section grow mt="md">
                <List icon={
                        <Image width="1vw" src={dumbbellIcon}></Image>
                    }>
                    <ListItem>1</ListItem>
                    <ListItem>1</ListItem>
                    <ListItem>1</ListItem>
                    <ListItem>1</ListItem>
                </List>
            </Navbar.Section>
            <Navbar.Section><Center>Just a footer</Center></Navbar.Section>
        </Navbar>
    )
}
