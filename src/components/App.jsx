import { QueryClientProvider, QueryClient } from 'react-query'
import { MantineProvider } from '@mantine/core';

import GuestLayout from './layout/guest/GuestLayout';
import UserLayout from './layout/user/UserLayout';
import UsersPage from './pages/UsersPage';
import GuestPage from './pages/GuestPage';
import { observer } from 'mobx-react';
import { AuthStore } from '../stores/AuthStore';

function App() {
  const queryClient = new QueryClient();
  const { isAuthenticated } = AuthStore

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={{ fontFamily: 'Epilogue', colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
        {isAuthenticated
          ?
          <UserLayout >
            <UsersPage />
          </UserLayout>
          :
          <GuestLayout>
            <GuestPage />
          </GuestLayout>
        }
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default observer(App);