import React from 'react'
import { Paper, Popper, Text } from '@mantine/core';

export default function ErrorPopper({ meta, message, referenceElement }) {
    return (
        <Popper
            mounted={meta.error && meta.touched}
            position="top"
            placement="center"
            gutter={10}
            arrowSize={meta.error && meta.touched ? 5 : 0}
            withArrow
            referenceElement={referenceElement}
            transitionTimingFunction="ease"
            arrowStyle={{
                backgroundColor: '#f5f5f5',
                borderBottom: '1px solid gray',
                borderRight: '1px solid gray'
            }}>
            {meta.error && meta.touched &&
                <Paper sx={{ padding: 5, backgroundColor: '#f5f5f5', border: '1px solid gray', }}>
                    <Text sx={{ fontSize: '0.9vw' }}>{message}</Text>
                </Paper>}
        </Popper>
    )
}
