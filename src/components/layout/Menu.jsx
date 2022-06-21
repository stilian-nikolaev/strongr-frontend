import React from 'react'
import { Box, Stack, Text } from '@mantine/core'
import { BsDot } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Menu() {
    const navigate = useNavigate()
    const [selected, setSelected] = useState('/workouts')

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

    useEffect(() => {
        setSelected(location.pathname)
    }, [location.pathname])

    function onItemClick(path) {
        setSelected(path);
        navigate(path)
    }
    
    return (
        <Stack>
            {items.map(x => (
                <Box onClick={() => onItemClick(x.path)} key={x.label} sx={{ display: 'flex', marginBottom: '0.3vw' }}>
                    {selected == x.path && <BsDot size="1.4vw" />}
                    <Text sx={{
                        fontSize: '1.1vw',
                        color: selected == x.path ? 'black' : '#5b5b5b',
                        marginLeft: selected == x.path ? 0 : '1.4vw',
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
