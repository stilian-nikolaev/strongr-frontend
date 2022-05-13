import { Image, List, ListItem, Text } from '@mantine/core'
import dumbbellIcon from '../../../images/dumbbell.png';
import settingsIcon from '../../../images/settings.png';
import foodIcon from '../../../images/food.png';
import React from 'react'

export default function Menu() {

    const items = [
        {
            label: 'Workouts',
            icon: dumbbellIcon,
        },
        {
            label: 'Meals',
            icon: foodIcon,
        },
        {
            label: 'Settings',
            icon: settingsIcon,
        },

    ]

    return (
        <List center spacing="xl">
            {items.map(x =>
                <ListItem
                    key={x.label}
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                    icon={<Image width={45} src={x.icon}></Image>}>
                    <Text sx={{ fontSize: '1vw', marginTop: '0.5vh', marginLeft: '0.5vw' }}>
                        {x.label}
                    </Text>
                </ListItem>)}
        </List>
    )
}
