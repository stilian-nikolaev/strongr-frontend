import {QueryClientProvider, QueryClient} from 'react-query'
import { MantineProvider } from '@mantine/core';

import Layout from './layout/user/Layout';
import UsersPage from './pages/UsersPage';

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