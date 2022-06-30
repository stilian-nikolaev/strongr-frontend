import { QueryClientProvider } from 'react-query'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { observer } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import { queryClient } from '../service/queryClient';
import { theme } from '../service/theme';
import Router from './Router';
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