import { ActionIcon, Card, Center, Container, List, SimpleGrid, Stack, Text } from '@mantine/core'
import axios from 'axios';
import React from 'react'
import { MdClose } from 'react-icons/md'
import { useQuery } from 'react-query';

async function fetchWorkout(id) {
    const res = await axios.get(`http://localhost:5000/workouts/${id}`);
    return res.data;
}

export default function Workout({ onBackClick, selectedWorkoutId }) {
    const { data, status } = useQuery(`workout/${selectedWorkoutId}`, () => fetchWorkout(selectedWorkoutId));
    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'error') {
        return <p>Error :(</p>
    }
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '60vw',
            marginTop: 20,
            padding: 0,
        }}>
            <Container sx={{ width: '60vw', padding: 0 }}>
                <Container sx={{
                    display: 'inline-flex',
                    paddingLeft: '1vw',
                    paddingRight: '4vw',
                    margin: 0,
                    borderBottom: '2px solid black',
                }}>
                    <Text sx={{ fontSize: '2rem' }}>Pull day</Text>
                </Container>
                <SimpleGrid spacing="md" cols={4} sx={{ marginTop: '30px' }}>
                    <Card sx={{ backgroundColor: 'pink', borderRadius: '10px', border: '2px solid grey' }}>
                        <Text sx={{ borderBottom: '1px solid black', width: '5vw', marginBottom: '5px' }}>
                            Pullups
                        </Text>
                        <Text>10 reps with 5 kg</Text>
                        <Text >10 reps with 5 kg</Text>
                        <Text>8 reps bodyweight</Text>
                        <Text>8 reps bodyweight</Text>
                        <Text>8 reps bodyweight</Text>
                    </Card>
                    <Card sx={{ backgroundColor: 'pink', borderRadius: '10px', border: '2px solid grey' }}>
                        <Text>Pullups</Text>
                        <Text>10 reps with 5 kg</Text>
                        <Text>8 reps bodyweight</Text>
                        <Text>8 reps bodyweight</Text>
                    </Card>
                    <Card sx={{ backgroundColor: 'pink', borderRadius: '10px', border: '2px solid grey' }}>
                        <Text>Pullups</Text>
                        <Text>10 reps with 5 kg</Text>
                        <Text>8 reps bodyweight</Text>
                        <Text>8 reps bodyweight</Text>
                    </Card>
                    <Card sx={{ backgroundColor: 'pink', borderRadius: '10px', border: '2px solid grey' }}>
                        <Text>Pullups</Text>
                        <Text>10 reps with 5 kg</Text>
                        <Text>10 reps with 5 kg</Text>
                        <Text>8 reps bodyweight</Text>
                        <Text>8 reps bodyweight</Text>
                    </Card>
                    <Card sx={{ backgroundColor: 'pink', borderRadius: '10px', border: '2px solid grey' }}>
                        <Text>Pullups</Text>
                        <Text>10 reps with 5 kg</Text>
                        <Text>8 reps bodyweight</Text>
                        <Text>8 reps bodyweight</Text>
                    </Card>
                    <Card sx={{ backgroundColor: 'pink', borderRadius: '10px', border: '2px solid grey' }}>
                        <Text>Pullups</Text>
                        <Text>10 reps with 5 kg</Text>
                        <Text>8 reps bodyweight</Text>
                        <Text>8 reps bodyweight</Text>
                    </Card>
                    <Card sx={{ backgroundColor: 'pink', borderRadius: '10px', border: '2px solid grey' }}>
                        <Text>Pullups</Text>
                        <Text>10 reps with 5 kg</Text>
                        <Text>10 reps with 5 kg</Text>
                        <Text>8 reps bodyweight</Text>
                        <Text>8 reps bodyweight</Text>
                    </Card>
                </SimpleGrid>

            </Container>
            <ActionIcon onClick={onBackClick} radius={50} sx={{
                border: '1px solid black', backgroundColor: 'pink', '&:hover': {
                    backgroundColor: '#F9BDC5'
                }
            }}>
                <MdClose size={30} />
            </ActionIcon>
        </Container>
    )
}
