import { ActionIcon, Card, Center, Box, List, Paper, SimpleGrid, Stack, Text, Container, Loader } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import axios from 'axios';
import React from 'react'
import { MdClose, MdMoreHoriz } from 'react-icons/md'
import { useWorkout } from '../../hooks/workouts';
import ErrorScreen from '../common/ErrorScreen';
import LoadingScreen from '../common/LoadingScreen';
import ExerciseCard from './ExerciseCard';


export default function ExercisesGrid({ setView, selectedWorkoutId }) {
    const { data, status } = useWorkout(selectedWorkoutId);

    if (status === 'loading') {
        return <LoadingScreen />;
    }

    if (status === 'error') {
        return <ErrorScreen />;
    }

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '60vw',
            marginTop: 10,
            padding: 0,
        }}>
            <Box sx={{ width: '60vw' }}>
                <Box sx={{
                    display: 'inline-flex',
                    paddingLeft: '1vw',
                    paddingRight: '4vw',
                    margin: 0,
                    borderBottom: '2px solid black',
                }}>
                    <Text sx={{ fontSize: '2rem' }}>{data.title}</Text>
                </Box>
                <SimpleGrid spacing="md" cols={4} sx={{ marginTop: '30px' }}>
                    
                    {
                    data.exercises.length != 0
                        ?
                        data.exercises.map(x => <ExerciseCard key={x._id} exercise={x} />)
                        :
                        <Text>There are currently no exercises in this workout.</Text>}
                </SimpleGrid>

            </Box>
            <ActionIcon onClick={() => setView('workouts')} radius={50}>
                <MdClose size={30} />
            </ActionIcon>
        </Container>
    )
}
