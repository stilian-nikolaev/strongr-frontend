import React, { useEffect } from 'react';
import { AppShell, Box, useMantineTheme } from '@mantine/core';

import NavigationBar from './NavigationBar';
import SideBar from './SideBar';
import { AuthStore } from '../../stores/AuthStore';
import GuestLayout from './GuestLayout';
import { useUser } from '../../hooks/user';
import { ViewStore } from '../../stores/ViewStore';
import { observer } from 'mobx-react';
import UserLayout from './UserLayout';

export default observer(function Layout({ children }) {
    const { isAuthenticated } = AuthStore
    
    return (isAuthenticated
        ?
        <UserLayout>
            {children}
        </UserLayout>
        :
        <GuestLayout>
            {children}
        </GuestLayout>
    );
})