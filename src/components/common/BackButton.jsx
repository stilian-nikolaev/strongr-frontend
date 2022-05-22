import { Box, Text, UnstyledButton } from '@mantine/core'
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

export default function BackButton({handler}) {
    return (
        <UnstyledButton
        onClick={handler}
        mr="md"
        sx={{
            backgroundColor: 'black',
            borderRadius: '50%',
            width: '3vw',
            height: '3vw',
            display: 'grid',
            placeItems: 'center',
            transition: 'all .15s ease-in-out',
            '&:hover': {
                borderRadius: 10,
                width: '5vw',
                '& .plus': {
                    display: 'none',
                },
                '& .text': {
                    color: 'pink',
                    fontSize: '1vw',
                    visibility: 'visible',
                }
            }
        }}>
        <Box sx={{ marginBottom: '-1.5vw' }}>
            <IoMdArrowRoundBack className="plus" color="pink" size={'1.5vw'} />
        </Box>
        <Text
            className="text"
            sx={{
                color: 'black',
                fontSize: '0vw',
                visibility: 'hidden',
                marginTop: '-1.5vw',
                transition: 'all .15s'
            }}>
            Back
        </Text>
    </UnstyledButton>
    )
}
