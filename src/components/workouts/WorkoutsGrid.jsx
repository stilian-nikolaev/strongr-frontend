import React from 'react'
import { ActionIcon, Card, Container, SimpleGrid, Text } from '@mantine/core'
import { MdAdd } from 'react-icons/md'

import LoadingScreen from '../common/LoadingScreen';
import ErrorScreen from '../common/ErrorScreen';
import { useWorkouts } from '../../hooks/workouts';
import { ViewStore } from '../../stores/ViewStore';
import { WorkoutStore } from '../../stores/WorkoutStore';
import WorkoutCard from './WorkoutCard';

export default function WorkoutsGrid() {
    const { data, status } = useWorkouts();
    const { setView } = ViewStore;

    function addWorkoutClickHandler() {
        setView('workout-form')
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
                    <WorkoutCard key={x._id} workout={x} />
                )}
            </SimpleGrid>
            <ActionIcon radius={50} onClick={addWorkoutClickHandler} >
                <MdAdd size={30} />
            </ActionIcon>
        </Container>
    )
}
