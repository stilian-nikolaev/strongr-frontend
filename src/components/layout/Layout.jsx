import React from 'react';
import { AppShell, Box } from '@mantine/core';

import NavigationBar from './NavigationBar';
import SideBar from './SideBar';
import { AuthStore } from '../../stores/AuthStore';
import GuestLayout from './GuestLayout';

export default function Layout({ children }) {
    const { isAuthenticated } = AuthStore

    return (isAuthenticated
            ?
            <AppShell navbar={<NavigationBar />} aside={<SideBar />}>
                <Box px="1vw">
                    {children}
                </Box>
            </AppShell>
            :
            <GuestLayout>
                {children}
            </GuestLayout>
    );
}