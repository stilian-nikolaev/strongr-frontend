import React from 'react';
import { AppShell } from '@mantine/core';
import SideBar from './SideBar';
import RightBar from './RightBar';

export default function Layout({ children }) {
    return (
        <AppShell navbar={<SideBar />} aside={<RightBar/>}>
            {children}
        </AppShell>
    );
}