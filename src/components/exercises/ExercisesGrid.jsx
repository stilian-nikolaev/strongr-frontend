import React, { useState } from 'react'
import { observer } from 'mobx-react';
import { ActionIcon, Box, SimpleGrid, Text, Container, Button, Menu, UnstyledButton } from '@mantine/core'

import ExerciseCard from './ExerciseCard';
import ErrorScreen from '../common/ErrorScreen';
import LoadingScreen from '../common/LoadingScreen';
import { useDeleteWorkout, useWorkout } from '../../hooks/workouts';
import { ViewStore } from '../../stores/ViewStore';
import { WorkoutStore } from '../../stores/WorkoutStore';
import BackButton from '../common/BackButton';
import { RiMoreFill } from 'react-icons/ri';
import EditTitleForm from './EditTitleForm';
import { useMutation } from 'react-query';
import ExerciseForm from './ExerciseForm';
import AddExerciseButton from './AddExerciseButton';
import GridHeader from './GridHeader';


export default observer(function ExercisesGrid() {
    const { workoutId } = WorkoutStore;
    const { addingExercise } = ViewStore;
    const { data, status } = useWorkout(workoutId);

    if (status === 'loading') {
        return <LoadingScreen />;
    }

    if (status === 'error') {
        return <ErrorScreen />;
    }

    return (
        <Box>
            <GridHeader title={data.title}/>
            <SimpleGrid spacing="1.2vw" cols={4} sx={{ marginTop: 30 }}>
                {data.exercises.length != 0
                    ?
                    data.exercises.map(x => <ExerciseCard key={x._id} exercise={x} />)
                    :
                    !addingExercise && <Text>There are currently no exercises in this workout.</Text>}
                {addingExercise && <ExerciseForm />}
            </SimpleGrid>
        </Box>
    )
})