import React from 'react'
import { Box, Stack, Text } from '@mantine/core'
import { BsDot } from 'react-icons/bs'

export default function Menu() {

    const items = [
        {
            label: 'Workouts',
            selected: true,
        },
        {
            label: 'Profile',
        },
        {
            label: 'Settings',
        },

    ]

    return (
        <Stack>
            {items.map(x => (
                <Box key={x.label} sx={{ display: 'flex', marginBottom: '0.3vw'}}>
                    {x.selected ? <BsDot size="1.4vw" /> : null}
                    <Text sx={{
                        fontSize: '1.1vw',
                        color: x.selected ? 'black' : '#5b5b5b',
                        marginLeft: x.selected ? 0 : '1vw',
                        paddingBottom: 5,
                        paddingLeft: 5,
                        width: '7vw',
                        backgroundImage: 'linear-gradient(black, black)',
                        backgroundSize: '0% 2px',
                        backgroundRepeat: 'no-repeat',
                        transition: 'background-size 0.3s',
                        backgroundPosition: '0 calc(100%)',
                        '&:hover': {
                            backgroundSize: '100% 2px',
                            cursor: 'pointer'
                        }
                    }}>
                        {x.label}
                    </Text>
                </Box>))}
        </Stack >
    )
}
