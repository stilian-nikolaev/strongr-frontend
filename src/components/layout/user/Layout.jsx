import React from 'react';
import { AppShell } from '@mantine/core';

import NavigationBar from './NavigationBar';
import SideBar from './SideBar';

export default function Layout({ children }) {
    return (
        <AppShell navbar={<NavigationBar />} aside={<SideBar />}>
            {children}
        </AppShell>
    );
}