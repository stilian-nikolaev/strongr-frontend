import React, { useState } from 'react';
import {
    AppShell,
    Header,
    Footer,
    Text,
    Button,
    Image,
    Center,
} from '@mantine/core';
import SideBar from './SideBar';
import GuestHeader from './GuestHeader';

export default function Layout({ children }) {
    return (
        <AppShell
            fixed
            navbar={
                <SideBar/>
            }
        >
            {children}
        </AppShell>
    );
}