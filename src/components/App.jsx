import { QueryClientProvider, QueryClient, QueryCache } from 'react-query'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider, showNotification } from '@mantine/notifications';
import UsersPage from './pages/main/UsersPage';
import GuestPage from './pages/main/GuestPage';
import { observer } from 'mobx-react';
import { AuthStore } from '../stores/AuthStore';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: error => showNotification({
          color: 'red',
          title: 'An error has occurred',
          message: error.response.data.message,
        })
      }
    },
  });
  const { isAuthenticated } = AuthStore

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={{
          fontFamily: 'Epilogue',
          colorScheme: 'light',
          colors: {
            brand: ['#FDCEDF', '#141517', '#808080', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
          },
        }} withGlobalStyles withNormalizeCSS>
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