import { Center, MantineProvider, Text } from '@mantine/core';
import Layout from './layout/Layout';

function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Epilogue', colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
      <Layout>
        <Center style={{height: '82vh'}}>
          <Text sx={{ fontSize: 20 }}>Gym app helps you create your personalised workout and meal plans.</Text>
        </Center>
      </Layout>
    </MantineProvider>
  );
}

export default App;