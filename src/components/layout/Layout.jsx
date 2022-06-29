import React, { useEffect } from 'react';
import { AppShell, Box, useMantineTheme } from '@mantine/core';

import NavigationBar from './NavigationBar';
import SideBar from './SideBar';
import { AuthStore } from '../../stores/AuthStore';
import GuestLayout from './GuestLayout';
import { useUser } from '../../hooks/user';
import { ViewStore } from '../../stores/ViewStore';

export default function Layout({ children }) {
    const { isAuthenticated } = AuthStore

    if (isAuthenticated) {
        const { data, status } = useUser();
        const theme = useMantineTheme();
        const { setThemeColor } = ViewStore;

        useEffect(() => {
            if (status === 'success') {
                theme.colors.main[0] = theme.colors.choice[data.themeColor]
                setThemeColor(data.themeColor)
            }
        }, [data?.themeColor])

        console.log(theme.colors.main[0]);
        if (status !== 'success') return
    }
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