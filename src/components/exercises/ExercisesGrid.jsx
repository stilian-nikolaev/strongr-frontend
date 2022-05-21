import { ActionIcon, Card, Center, Box, List, Paper, SimpleGrid, Stack, Text, Container, Loader, Button } from '@mantine/core'
import { observer } from 'mobx-react';
import React from 'react'
import { MdClose, MdMoreHoriz } from 'react-icons/md'
import { useWorkout } from '../../hooks/workouts';
import { ViewStore } from '../../stores/ViewStore';
import ErrorScreen from '../common/ErrorScreen';
import LoadingScreen from '../common/LoadingScreen';
import ExerciseCard from './ExerciseCard';


export default function ExercisesGrid({ selectedWorkoutId }) {
    const { data, status } = useWorkout(selectedWorkoutId);
    const { setView } = ViewStore;

    function onAddExerciseClick() {
        setView('exercise-form');
    }

    function onClose() {
        setView('workouts')
    }

    if (status === 'loading') {
        return <LoadingScreen />;
    }

    if (status === 'error') {
        return <ErrorScreen />;
    }

    return (
        <Container sx={{padding: 0}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 10,
                padding: 0,
            }}>
                <Box sx={{
                    display: 'inline-flex',
                    paddingLeft: '1vw',
                    paddingRight: '4vw',
                    margin: 0,
                    borderBottom: '2px solid black',
                }}>
                    <Text sx={{ fontSize: '2rem' }}>{data.title}</Text>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Button onClick={onAddExerciseClick} color="dark" size="xs" mr="md">Add exercise</Button>
                    <ActionIcon onClick={onClose} radius={50}>
                        <MdClose size={30} />
                    </ActionIcon>
                </Box>
            </Box>
            <SimpleGrid spacing="md" cols={4} sx={{ marginTop: 30 }}>
                {
                    data.exercises.length != 0
                        ?
                        data.exercises.map(x => <ExerciseCard selectedWorkoutId={selectedWorkoutId} key={x._id} exercise={x} />)
                        :
                        <Text>There are currently no exercises in this workout.</Text>}
            </SimpleGrid>
        </Container>
    )
}