import { Center, MantineProvider, Text } from '@mantine/core';
import Layout from './users/layout/Layout';
import UsersPage from './users/UsersPage';
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