import { Box, Card, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom';
import { ViewStore } from '../../stores/ViewStore';
import { WorkoutStore } from '../../stores/WorkoutStore';


export default function WorkoutCard({ workout }) {
    const { setView } = ViewStore;
    const { setWorkoutId } = WorkoutStore;


    function workoutClickHandler() {
        setWorkoutId(workout._id);
        setView('exercises')
    }
    return (
        <Link to={`workouts/${workout._id}`}>
            <Card
                shadow="lg"
                sx={{
                    backgroundColor: 'pink',
                    height: '7.5vw',
                    borderRadius: '10px',
                    border: '2px solid #353935',
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }}>
                <Text sx={{ fontSize: '1.4vw' }}>{workout.title}</Text>
                <Box>
                    <Text sx={{ fontSize: '1vw' }}>Exercises: {workout.exercises?.length}</Text>
                    <Text sx={{ fontSize: '1vw' }}>Sets: {workout.exercises?.reduce((x, acc) => x + acc.sets?.length, 0)}</Text>
                </Box>
            </Card>
        </Link>
    )
}
