import {QueryClientProvider, QueryClient} from 'react-query'
import { MantineProvider } from '@mantine/core';

import Layout from './layout/guest/Layout';
import UsersPage from './pages/UsersPage';
import GuestPage from './pages/GuestPage';
import { ViewStore } from '../stores/ViewStore';

function App() {
  const queryClient = new QueryClient();
  const {setView} = ViewStore;
setView('login');
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={{ fontFamily: 'Epilogue', colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
        <Layout>
          <GuestPage />
        </Layout>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;