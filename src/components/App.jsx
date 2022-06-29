import { QueryClientProvider, QueryClient, QueryCache } from 'react-query'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider, showNotification } from '@mantine/notifications';
import UsersPage from './pages/main/UsersPage';
import GuestPage from './pages/main/GuestPage';
import { observer } from 'mobx-react';
import { AuthStore } from '../stores/AuthStore';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import { queryClient } from '../service/queryClient';
import { theme } from '../service/theme';

function App() {
  const { isAuthenticated } = AuthStore

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <Layout>
              {isAuthenticated ? <UsersPage /> : <GuestPage />}
            </Layout>
          </NotificationsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default observer(App);