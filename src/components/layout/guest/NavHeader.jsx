import React from 'react'
import { Avatar, Button, Header, Image, Text } from '@mantine/core'
import logo from '../../../images/logo.jpg'
import { ViewStore } from '../../../stores/ViewStore'


export default function NavHeader() {
const {setView} = ViewStore;

    function onLogInClick() {
        setView('login')
    }

    function onLogoClick() {
        setView('home')
    }

    return (
        <Header sx={(theme) => ({ boxShadow: theme.shadows.sm })} py="md" px="xl">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', }}>
                <Avatar
                    src={logo}
                    alt="logo"
                    size="4.4vw"
                    radius="50%"
                    onClick={onLogoClick}
                    sx={{ border: '2px solid black', cursor: 'pointer'}} />
                <Text sx={{ fontSize: 30, fontWeight: 'bold' }}>Strongr</Text>
                <Button onClick={onLogInClick} color="dark" radius="lg">Log in</Button>
            </div>
        </Header>
    )
}
