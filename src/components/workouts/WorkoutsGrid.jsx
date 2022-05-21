import { ActionIcon, Box, Card, Center, Container, Loader, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { observer } from 'mobx-react'
import { MdAdd } from 'react-icons/md'
import { useWorkouts } from '../../hooks/workouts';
import { ViewStore } from '../../stores/ViewStore';
import { WorkoutStore } from '../../stores/WorkoutStore';
import ErrorScreen from '../common/ErrorScreen';
import LoadingScreen from '../common/LoadingScreen';

export default function WorkoutsGrid() {
    const { data, status } = useWorkouts();
    const { setView } = ViewStore;
    const {setWorkoutId} = WorkoutStore;

    function addWorkoutClickHandler() {
        setView('workout-form')
    }

    function workoutClickHandler(id) {
        setWorkoutId(id);
        setView('exercises')
    }

    if (status === 'loading') {
        return <LoadingScreen />
    }

    if (status === 'error') {
        return <ErrorScreen />
    }

    return (
        <Container sx={{ display: 'flex', justifyContent: 'space-between', width: '60vw', marginTop: 20, padding: 0 }}>
            <SimpleGrid cols={3}>
                {data.map(x =>
                    <Card key={x._id} onClick={() => workoutClickHandler(x._id)} px={20} sx={{ backgroundColor: 'pink' }} shadow="sm">
                        <Text>{x.title}</Text>
                        <Text>Exercises: {x.exercises.length}</Text>
                        <Text>Sets: {x.exercises.reduce((x, acc) => x + acc.sets.length, 0)}</Text>
                    </Card>
                )}
            </SimpleGrid>
            <ActionIcon radius={50} onClick={addWorkoutClickHandler} >
                <MdAdd size={30} />
            </ActionIcon>
        </Container>
    )
}
