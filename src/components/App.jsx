import { Center, MantineProvider, Text } from '@mantine/core';
import Layout from './layout/Layout';
import GuestPage from './pages/GuestPage';
import UsersPage from './pages/UsersPage';
import {QueryClientProvider, QueryClient} from 'react-query'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={{ fontFamily: 'Epilogue', colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
        <Layout>
          <UsersPage />
        </Layout>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;