import { Box, Image, List, ListItem, Stack, Text } from '@mantine/core'
import dumbbellIcon from '../../../images/dumbbell.png';
import settingsIcon from '../../../images/settings.png';
import foodIcon from '../../../images/food.png';
import React from 'react'
import { MdBorderBottom } from 'react-icons/md';

export default function Menu() {

    const items = [
        {
            label: 'Workouts',
            selected: true
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

                <Text key={x.label} sx={{
                    fontSize: '1vw',
                    color: x.selected ? 'black' : '#5b5b5b',
                    paddingBottom: 5,
                    paddingLeft: 10,
                    width: '7vw',
                    borderBottom: x.selected ? '1px solid black' : '',
                    '&::after': {
                        color: 'red'
                    }
                }}>
                    {x.label}
                </Text>
            ))}
        </Stack>
    )
}
