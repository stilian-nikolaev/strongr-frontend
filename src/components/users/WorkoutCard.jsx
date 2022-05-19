import { MdClose, MdMoreHoriz } from 'react-icons/md'
import { RiMoreFill } from 'react-icons/ri';
import { Box, Card, Text } from '@mantine/core'
import React from 'react'

export default function WorkoutCard() {
  return (
    <Card sx={{
        backgroundColor: 'pink',
        borderRadius: '10px',
        border: '2px solid grey',
        '&:hover': {
            '& .more': {
                display: 'block'
            }
        }
    }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text sx={{ borderBottom: '1px solid black', width: '5vw', marginBottom: '5px' }}>
                Pullups
            </Text>
            <Box className="more" sx={{ height:'1vh', padding:0, display:'none', '&:hover': { cursor: 'pointer' } }}>
                <RiMoreFill size="1.5vw" />
            </Box>
        </Box>
        <Text>10 reps with 5 kg</Text>
        <Text >10 reps with 5 kg</Text>
        <Text>8 reps bodyweight</Text>
        <Text>8 reps bodyweight</Text>
        <Text>8 reps bodyweight</Text>
    </Card>
  )
}
