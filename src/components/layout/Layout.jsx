import React, { useState } from 'react';
import {
    AppShell,
    Header,
    Footer,
    Text,
    Button,
    Image,
} from '@mantine/core';
import logo from '../../images/logo.jpg'

export default function Layout({ children }) {
    return (
        <AppShell
            fixed
            footer={
                <Footer sx={{fontSize: 20}} height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header py="md" px="xl">
                    <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center', height: '100%'}}>
                        <Image src={logo} width={60} radius={50} sx={{border: '2px solid black', borderRadius: '50%'}}/>
                        <Text sx={{fontSize: 30, fontFamily: ''}}>Gym app</Text>
                        <Button color="dark" radius="lg">Log in</Button>
                    </div>
                </Header>
            }
        >
            {children}
        </AppShell>
    );
}