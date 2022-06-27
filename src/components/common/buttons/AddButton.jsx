import React from 'react'
import { Box, Text, UnstyledButton } from '@mantine/core'
import { HiPlus } from 'react-icons/hi'

export default function AddButton({ handler, label }) {

    return (
        <UnstyledButton
            onClick={handler}
            mr="md"
            sx={(theme) => ({
                backgroundColor: theme.colors.brand[1],
                borderRadius: '50%',
                width: '3vw',
                height: '3vw',
                display: 'grid',
                placeItems: 'center',
                transition: 'all .15s ease-in-out',
                '&:hover': {
                    borderRadius: 10,
                    width: '10vw',
                    '& .plus': {
                        display: 'none',
                    },
                    '& .text': {
                        color: theme.colors.brand[0],
                        fontSize: '1vw',
                        visibility: 'visible',
                    }
                }
            })}>
            <Box
                sx={(theme) => ({
                    marginBottom: '-1.5vw',
                    '& .plus': {
                        color: theme.colors.brand[0],
                    },
                })}>
                <HiPlus className="plus" size={'1.5vw'} />
            </Box>
            <Text
                className="text"
                sx={(theme) => ({
                    color: theme.colors.brand[1],
                    fontSize: '0vw',
                    visibility: 'hidden',
                    marginTop: '-1.5vw',
                    transition: 'all .15s'
                })}>
                {label}
            </Text>
        </UnstyledButton>
    )
}
