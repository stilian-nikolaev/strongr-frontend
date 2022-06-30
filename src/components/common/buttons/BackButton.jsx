import React from 'react'
import { Box, Text, UnstyledButton } from '@mantine/core'
import { IoMdArrowRoundBack } from 'react-icons/io'

export default function BackButton({ handler }) {
    return (
        <UnstyledButton
            onClick={handler}
            mr="md"
            sx={(theme) => ({
                backgroundColor: theme.colors.common[0],
                borderRadius: '50%',
                width: '3vw',
                height: '3vw',
                display: 'grid',
                placeItems: 'center',
                transition: 'all .15s ease-in-out',
                '&:hover': {
                    borderRadius: 10,
                    width: '5vw',
                    '& .back': {
                        display: 'none',
                    },
                    '& .text': {
                        color: theme.colors.main[0],
                        fontSize: '1vw',
                        visibility: 'visible',
                    }
                }
            })}>
            <Box
                sx={(theme) => ({
                    marginBottom: '-1.5vw',
                    '& .back': {
                        color: theme.colors.main[0],

                    },
                })}>
                <IoMdArrowRoundBack className="back" size={'1.5vw'} />
            </Box>
            <Text
                className="text"
                sx={(theme) => ({
                    color: theme.colors.main[0],
                    fontSize: '0vw',
                    visibility: 'hidden',
                    marginTop: '-1.5vw',
                    transition: 'all .15s'
                })}>
                Back
            </Text>
        </UnstyledButton>
    )
}