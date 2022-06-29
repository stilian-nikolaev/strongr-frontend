import { QueryClient } from "react-query";
import { showNotification } from '@mantine/notifications';

export const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            onError: error => showNotification({
                color: 'red',
                title: 'An error has occurred',
                message: error.response.data.message,
            })
        }
    },
});