import { ActionIcon, Card, Center, Box, List, Paper, SimpleGrid, Stack, Text, Container, Loader } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import axios from 'axios';
import React from 'react'
import { MdClose, MdMoreHoriz } from 'react-icons/md'
import { useQuery } from 'react-query';
import WorkoutCard from './WorkoutCard';

async function fetchWorkout(id) {
    const res = await axios.get(`http://localhost:5000/workouts/${id}`);
    return res.data;
}

export default function Workout({ onBackClick, selectedWorkoutId }) {
    const { data, status } = useQuery(`workout/${selectedWorkoutId}`, () => fetchWorkout(selectedWorkoutId));
    if (status === 'loading') {
        return <Center sx={{ height: '82vh' }}>
            <Loader color="dark" variant="dots" />
        </Center>
    }

    if (status === 'error') {
        return <p>Error :(</p>
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
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                </SimpleGrid>

            </Box>
            <ActionIcon onClick={onBackClick} radius={50}>
                <MdClose size={30} />
            </ActionIcon>
        </Container>
    )
}
