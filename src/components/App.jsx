import { QueryClientProvider, QueryClient } from 'react-query'
import { MantineProvider } from '@mantine/core';

import UsersPage from './pages/main/UsersPage';
import GuestPage from './pages/main/GuestPage';
import { observer } from 'mobx-react';
import { AuthStore } from '../stores/AuthStore';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  const queryClient = new QueryClient();
  const { isAuthenticated } = AuthStore

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={{ fontFamily: 'Epilogue', colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
          <Layout>
            {isAuthenticated ? <UsersPage /> : <GuestPage />}
          </Layout>
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default observer(App);