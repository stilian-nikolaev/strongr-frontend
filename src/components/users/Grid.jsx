import { ActionIcon, Card, Center, Container, Loader, SimpleGrid, Text } from '@mantine/core'
import axios from 'axios';
import React from 'react'
import { MdAdd } from 'react-icons/md'
import { useQuery } from 'react-query';

async function fetchWorkouts() {
    const res = await axios.get('http://localhost:5000/workouts');
    return res.data;
}


export default function Grid({ onWorkoutClick }) {
    const { data, status } = useQuery('workouts', fetchWorkouts);
    if (status === 'loading') {
        return <Center sx={{height: '82vh'}}>
            <Loader color="dark" variant="dots" />
        </Center>
    }


    if (status === 'error') {
        return <p>Error :(</p>
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
