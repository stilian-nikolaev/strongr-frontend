import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Card, Text } from '@mantine/core'


export default function WorkoutCard({ workout }) {
    const navigate = useNavigate();

    function handleWorkoutClick() {
        navigate(`/workouts/${workout._id}`)
    }
    return (
        <Card
            onClick={handleWorkoutClick}
            shadow="lg"
            sx={(theme) => ({
                backgroundColor: theme.colors.main[0],
                borderRadius: '10px',
                border: `2px solid ${theme.colors.common[2]}`,
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: theme.fn.darken(theme.colors.main[0], 0.03),
                }
            })}>
            <Text sx={{ fontSize: '1.4vw' }}>{workout.title}</Text>
            <Box>
                <Text sx={{ fontSize: '1vw' }}>Exercises: {workout.exercises?.length}</Text>
                <Text sx={{ fontSize: '1vw' }}>Sets: {workout.exercises?.reduce((x, acc) => x + acc.sets?.length, 0)}</Text>
            </Box>
        </Card>
    )
}