import {QueryClientProvider, QueryClient} from 'react-query'
import { MantineProvider } from '@mantine/core';

import GuestLayout from './layout/guest/GuestLayout';
import UserLayout from './layout/user/UserLayout';
import UsersPage from './pages/UsersPage';
import GuestPage from './pages/GuestPage';
import { ViewStore } from '../stores/ViewStore';

function App() {
  const queryClient = new QueryClient();
  const {setView} = ViewStore;
// setView('home');
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={{ fontFamily: 'Epilogue', colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
        {/* <GuestLayout>
          <GuestPage />
        </GuestLayout> */}
        <UserLayout>
          <UsersPage/>
        </UserLayout>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;