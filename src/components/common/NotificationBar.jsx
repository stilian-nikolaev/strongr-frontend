import { Box, Center, Notification, Text } from '@mantine/core'
import React from 'react'

export default function NotificationBar() {

    return (
        <Notification
            sx={{ position: 'absolute', left: '1.4vw', bottom: '2vw', width: '20vw', zIndex: 5 }}
            title="Default notification">
            <Text>Hello</Text>
        </Notification>
    )
}
