import React, { useState, useEffect } from 'react'
import { AppShell, Box, useMantineTheme } from '@mantine/core'

import NavigationBar from './NavigationBar'
import SideBar from './SideBar'
import LoadingScreen from '../common/LoadingScreen';
import { useUser } from '../../hooks/user';
import { ViewStore } from '../../stores/ViewStore';

export default function UserLayout({ children }) {
    const { data, status } = useUser()
    const [loaded, setLoaded] = useState(false)
    const theme = useMantineTheme()
    const { setThemeColor } = ViewStore

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
