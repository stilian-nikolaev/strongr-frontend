import { Card, Text } from '@mantine/core'
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
            <Text>{workout.title}</Text>
            <Text>Exercises: {workout.exercises.length}</Text>
            <Text>Sets: {workout.exercises.reduce((x, acc) => x + acc.sets.length, 0)}</Text>
        </Card>
    )
}
