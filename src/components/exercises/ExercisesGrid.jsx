import React from 'react'
import { observer } from 'mobx-react';
import { Box, SimpleGrid, Text } from '@mantine/core'

import ExerciseCard from './ExerciseCard';
import ExerciseForm from './ExerciseForm';
import GridHeader from './GridHeader';
import ErrorScreen from '../common/ErrorScreen';
import LoadingScreen from '../common/LoadingScreen';
import { useWorkout } from '../../hooks/workouts';
import { ViewStore } from '../../stores/ViewStore';
import ConfirmationModal from '../common/ConfirmationModal';
import { useParams } from 'react-router-dom';


export default observer(function ExercisesGrid() {
    const { workoutId } = useParams()
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
            <GridHeader title={data.title} />
            <SimpleGrid spacing="1.2vw" cols={3} sx={{ width: '52vw', marginTop: '1.8vw' }}>
                {data.exercises.length != 0
                    ?
                    data.exercises.map(x => <ExerciseCard key={x._id} exercise={x} />)
                    :
                    !addingExercise && <Text sx={{ fontSize: 18 }}>There are currently no exercises in this workout.</Text>}
                {addingExercise && <ExerciseForm />}
            </SimpleGrid>
            {/*TODO: should cfrm modal be here? */}
            <ConfirmationModal />
        </Box>
    )
})