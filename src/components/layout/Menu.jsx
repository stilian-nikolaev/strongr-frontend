import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Stack, Text } from '@mantine/core'
import { BsDot } from 'react-icons/bs'

const items = [
    {
        label: 'Workouts',
        path: '/workouts',
    },
    {
        label: 'Profile',
        path: '/profile',
    },
    {
        label: 'Settings',
        path: '/settings',
    },
]

export default function Menu() {
    const navigate = useNavigate()
    const [selected, setSelected] = useState('/workouts')

    useEffect(() => {
        setSelected(location.pathname)
    }, [location.pathname])

    function handleMenuItemClick(path) {
        setSelected(path);
        navigate(path)
    }

    return (
        <Stack>
            {items.map(x => (
                <Box onClick={() => handleMenuItemClick(x.path)} key={x.label} sx={{ display: 'flex', marginBottom: '0.3vw' }}>
                    {selected.includes(x.path) && <BsDot size="1.4vw" />}
                    <Text
                        sx={(theme) => ({
                            fontSize: '1.1vw',
                            color: selected.includes(x.path) ? theme.colors.common[0] : theme.colors.common[1],
                            marginLeft: selected.includes(x.path) ? 0 : '1.4vw',
                            paddingBottom: 5,
                            paddingLeft: 5,
                            width: '7vw',
                            backgroundImage: `linear-gradient(${theme.colors.common[0]}, ${theme.colors.common[0]})`,
                            backgroundSize: '0% 2px',
                            backgroundRepeat: 'no-repeat',
                            transition: 'background-size 0.3s',
                            backgroundPosition: '0 calc(100%)',
                            '&:hover': {
                                backgroundSize: '100% 2px',
                                cursor: 'pointer'
                            }
                        })}>
                        {x.label}
                    </Text>
                </Box>))}
        </Stack >
    )
}