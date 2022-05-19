import { ActionIcon, Card, Center, Box, List, Paper, SimpleGrid, Stack, Text, Container, Loader } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import axios from 'axios';
import React from 'react'
import { MdClose, MdMoreHoriz } from 'react-icons/md'
import { useQuery } from 'react-query';
import ErrorScreen from '../common/ErrorScreen';
import LoadingScreen from '../common/LoadingScreen';
import ExerciseCard from './ExerciseCard';

async function fetchWorkout(id) {
    const res = await axios.get(`http://localhost:5000/workouts/${id}`);
    return res.data;
}

export default function ExercisesGrid({ onBackClick, selectedWorkoutId }) {
    const { data, status } = useQuery(`workout/${selectedWorkoutId}`, () => fetchWorkout(selectedWorkoutId));
    if (status === 'loading') {
        return <LoadingScreen/>;
    }

    if (status === 'error') {
        return <ErrorScreen/>;
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
                    <Text sx={{ fontSize: '2rem' }}>Pull day</Text>
                </Box>
                <SimpleGrid spacing="md" cols={4} sx={{ marginTop: '30px' }}>
                    {data.exercises.map(x=> <ExerciseCard exercise={x}/>)}
                </SimpleGrid>

            </Box>
            <ActionIcon onClick={onBackClick} radius={50}>
                <MdClose size={30} />
            </ActionIcon>
        </Container>
    )
}
