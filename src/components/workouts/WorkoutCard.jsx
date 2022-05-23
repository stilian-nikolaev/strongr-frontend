import { Box, Card, Text } from '@mantine/core'
import React from 'react'
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
        <Card
            onClick={workoutClickHandler}
            shadow="lg"
            sx={{
                backgroundColor: 'pink',
                borderRadius: '10px',
                border: '2px solid #353935',
            }}>
            <Text sx={{ fontSize: '1.8vw' }}>{workout.title}</Text>
            <Box sx={{ }}>
                <Text sx={{fontSize: '1vw'}}>Exercises: {workout.exercises?.length}</Text>
                <Text sx={{fontSize: '1vw'}}>Sets: {workout.exercises?.reduce((x, acc) => x + acc.sets?.length, 0)}</Text>
            </Box>
        </Card>
    )
}
