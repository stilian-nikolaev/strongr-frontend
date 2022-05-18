import { Image, List, ListItem, Stack, Text } from '@mantine/core'
import dumbbellIcon from '../../../images/dumbbell.png';
import settingsIcon from '../../../images/settings.png';
import foodIcon from '../../../images/food.png';
import React from 'react'

export default function Menu() {

    const items = [
        {
            label: 'Workouts',
            selected: true,
        },
        {
            label: 'Meals',
        },
        {
            label: 'Settings',
        },

    ]

    return (
        <Stack>
            {items.map(x => (
                <Text sx={{
                    width: '5vw',
                    color: x.selected ? 'grey' : 'black',
                    fontSize: x.selected ? '1.1vw' : '1vw',
                    borderBottom: x.selected ? '2px solid black': '',
                    marginTop: '0.5vh',
                    marginLeft: '0.5vw',
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }}>
                    {x.label}
                </Text>
            ))}
        </Stack>
    )
}
