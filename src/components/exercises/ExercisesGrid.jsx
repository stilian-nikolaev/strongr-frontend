import React from 'react'
import { observer } from 'mobx-react';
import { ActionIcon, Box, SimpleGrid, Text, Container, Button } from '@mantine/core'
import { MdClose } from 'react-icons/md'

import ExerciseCard from './ExerciseCard';
import ErrorScreen from '../common/ErrorScreen';
import LoadingScreen from '../common/LoadingScreen';
import { useWorkout } from '../../hooks/workouts';
import { ViewStore } from '../../stores/ViewStore';
import { WorkoutStore } from '../../stores/WorkoutStore';
import CloseButton from '../common/CloseButton';


export default observer(function ExercisesGrid() {
    const { workoutId } = WorkoutStore;
    const { setView } = ViewStore;
    const { data, status } = useWorkout(workoutId);

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
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 10,
            }}>
                <Box sx={{
                    paddingLeft: '1vw',
                    paddingRight: '4vw',
                    borderBottom: '2px solid black',
                }}>
                    <Text sx={{ fontSize: '2.4vw' }}>{data.title}</Text>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Button onClick={onAddExerciseClick} color="dark" size="md"  mr="md">
                       <Text sx={{fontSize: '1vw'}}>Add exercise</Text> 
                    </Button>
                    <CloseButton onClose={onClose}/>
                </Box>
            </Box>
            <SimpleGrid spacing="1.2vw" cols={4} sx={{ marginTop: 30 }}>
                {data.exercises.length != 0
                    ?
                    data.exercises.map(x => <ExerciseCard key={x._id} exercise={x} />)
                    :
                    <Text>There are currently no exercises in this workout.</Text>}
            </SimpleGrid>
        </Box>
    )
})