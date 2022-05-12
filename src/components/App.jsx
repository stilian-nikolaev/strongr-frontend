import { Center, MantineProvider, Text } from '@mantine/core';
import Layout from './layout/Layout';
import GuestPage from './pages/GuestPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Epilogue', colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
      <Layout>
        <UsersPage/>
      </Layout>
    </MantineProvider>
  );
}

export default App;