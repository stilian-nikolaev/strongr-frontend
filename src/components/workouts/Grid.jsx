import { ActionIcon, Box, Card, Center, Container, Loader, SimpleGrid, Text } from '@mantine/core'
import axios from 'axios';
import React from 'react'
import { MdAdd } from 'react-icons/md'
import { useQuery } from 'react-query';
import ErrorScreen from '../common/ErrorScreen';
import LoadingScreen from '../common/LoadingScreen';

async function fetchWorkouts() {
    const res = await axios.get('http://localhost:5000/workouts');
    return res.data;
}


export default function Grid({ onWorkoutClick }) {
    const { data, status } = useQuery('workouts', fetchWorkouts);
    
    if (status === 'loading') {
        return <LoadingScreen/>
    }

    if (status === 'error') {
        return <ErrorScreen/>
    }
    return (
        <Container sx={{ display: 'flex', justifyContent: 'space-between', width: '60vw', marginTop: 20, padding: 0 }}>
            <SimpleGrid cols={3}>
                {data.map(x =>
                    <Card key={x._id} onClick={() => onWorkoutClick(x._id)} px={20} sx={{ backgroundColor: 'pink' }} shadow="sm">
                        <Text  >{x.title}</Text>
                        <Text>Exercises: {x.exercises.length}</Text>
                        <Text>Sets: {x.exercises.reduce((x, acc) => x + acc.sets, 0)}</Text>
                    </Card>

                )}
            </SimpleGrid>
            <ActionIcon radius={50} >
                <MdAdd size={30} />
            </ActionIcon>
        </Container>
    )
}