import React from 'react'
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Box, SimpleGrid, Text } from '@mantine/core'

import ExerciseCard from './exercises/ExerciseCard';
import ExerciseForm from './exercises/ExerciseForm';
import GridHeader from './exercises/GridHeader';
import ErrorScreen from '../../common/ErrorScreen';
import LoadingScreen from '../../common/LoadingScreen';
import ConfirmationModal from '../../common/ConfirmationModal';
import { useWorkout } from '../../../hooks/workouts';
import { ViewStore } from '../../../stores/ViewStore';


export default observer(function WorkoutDetailsPage() {
    const { addingExercise } = ViewStore;
    const { workoutId } = useParams()
    const { data, status } = useWorkout(workoutId);

    if (status === 'loading') return <LoadingScreen />

    if (status === 'error') return <ErrorScreen />

    return (
        <Box>
            <GridHeader title={data?.title} />
            <SimpleGrid spacing="1.2vw" cols={3} sx={{ width: '52vw', marginTop: '1.8vw' }}>
                {
                    data?.exercises?.length != 0
                        ?
                        data?.exercises?.map(x => <ExerciseCard key={x._id} exercise={x} />)
                        :
                        !addingExercise &&
                        <Text sx={{ fontSize: '1vw', width: '15vw', marginLeft: '0.5vw' }}>
                            There are currently no exercises in this workout.
                        </Text>
                }
                {addingExercise && <ExerciseForm />}
            </SimpleGrid>
            <ConfirmationModal />
        </Box>
    )
})