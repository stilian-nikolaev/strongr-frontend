import React from 'react';
import { AppShell } from '@mantine/core';
import SideBar from './SideBar';

export default function Layout({ children }) {
    return (
        <AppShell fixed navbar={<SideBar />}>
            {children}
        </AppShell>
    );
}