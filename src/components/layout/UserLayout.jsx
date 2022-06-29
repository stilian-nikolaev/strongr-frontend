import { AppShell, Box, useMantineTheme } from '@mantine/core'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useUser } from '../../hooks/user';
import { ViewStore } from '../../stores/ViewStore';
import LoadingScreen from '../common/LoadingScreen';
import NavigationBar from './NavigationBar'
import SideBar from './SideBar'

export default function UserLayout({ children }) {
    const { data, status } = useUser();
    const theme = useMantineTheme();
    const { setThemeColor } = ViewStore;
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (status === 'success') {
            theme.colors.main[0] = theme.colors.choice[data.themeColor]
            setThemeColor(data.themeColor)
            setLoaded(true)
        }
    }, [data?.themeColor])

    if (!loaded) return <LoadingScreen />

    return (
        <AppShell navbar={<NavigationBar />} aside={<SideBar />}>
            <Box px="1vw">
                {children}
            </Box>
        </AppShell>
    )
}
