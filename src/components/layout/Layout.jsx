import React from 'react';
import { observer } from 'mobx-react';

import GuestLayout from './GuestLayout';
import UserLayout from './UserLayout';
import { AuthStore } from '../../stores/AuthStore';

export default observer(function Layout({ children }) {
    const { isAuthenticated } = AuthStore

    return (
        isAuthenticated
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