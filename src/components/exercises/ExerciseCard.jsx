import { RiMoreFill } from 'react-icons/ri';
import { Box, Card, Text } from '@mantine/core'
import React from 'react'

export default function ExerciseCard({exercise}) {
  return (
    <Card shadow="lg" sx={{
        backgroundColor: 'pink',
        borderRadius: '10px',
        border: '2px solid grey',
        '&:hover': {
            cursor:'default',
            '& .more': {
                display: 'block'
            }
        }
    }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text sx={{ borderBottom: '1px solid black', width: '9vw', marginBottom: '5px' }}>
                {exercise.title}
            </Text>
            <Box className="more" sx={{ height:'1vh', padding:0, display:'none', '&:hover': { cursor: 'pointer' } }}>
                <RiMoreFill size="1.5vw" />
            </Box>
        </Box>
        {exercise.sets.map(x=><Text>{x.amount} reps {x.weight > 0 ? `with ${x.weight} kg` : 'bodyweight'}</Text>)}
    </Card>
  )
}
