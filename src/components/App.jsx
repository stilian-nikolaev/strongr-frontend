import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query'
import { observer } from 'mobx-react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import Router from './Router';
import Layout from './layout/Layout';
import { theme } from '../service/theme';
import { queryClient } from '../service/queryClient';

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <Layout>
              <Router />
            </Layout>
          </NotificationsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default observer(App);