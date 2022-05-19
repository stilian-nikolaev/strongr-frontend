import { Box, Image, List, ListItem, Stack, Text } from '@mantine/core'
import dumbbellIcon from '../../../images/dumbbell.png';
import settingsIcon from '../../../images/settings.png';
import foodIcon from '../../../images/food.png';
import React from 'react'
import { MdBorderBottom } from 'react-icons/md';
import { BsDot} from 'react-icons/bs'

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
            {items.map(x => (<Box key={x.label} sx={{display: 'flex'}}>
                {x.selected ? <BsDot size={20}/> : ''}
                <Text sx={{
                    fontSize: '1vw',
                    color: x.selected ? 'black' : '#5b5b5b',
                    marginLeft: x.selected ? 0 : 20,
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
            </Box>
            ))
            }
        </Stack >
    )
}
