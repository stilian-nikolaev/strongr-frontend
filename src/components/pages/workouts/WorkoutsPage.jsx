import React from 'react'
import { observer } from 'mobx-react';
import { Box, SimpleGrid, Text } from '@mantine/core'

import WorkoutCard from './WorkoutCard';
import GridHeader from './GridHeader';
import WorkoutsForm from './WorkoutsForm';
import LoadingScreen from '../../common/LoadingScreen';
import ErrorScreen from '../../common/ErrorScreen';
import { useWorkouts } from '../../../hooks/workouts';
import { ViewStore } from '../../../stores/ViewStore';

export default observer(function WorkoutsPage() {
    const { addingWorkout } = ViewStore;
    const { data, status } = useWorkouts();

    if (status === 'loading') return <LoadingScreen />

    if (status === 'error') return <ErrorScreen />

    return (
        <Box sx={{
            marginTop: '1vw',
        }}>
            <GridHeader />
            <Box sx={{ width: '55vw' }}>
                <SimpleGrid cols={5} sx={{
                    marginTop: '1.8vw',
                }}>
                    {
                        data.length != 0
                            ?
                            data.map(x =>
                                <WorkoutCard key={x._id} workout={x} />
                            )
                            :
                            !addingWorkout &&
                            <Text sx={{ fontSize: '1vw', width: '16vw', marginLeft: '0.5vw' }}>
                                You don't have any workouts yet.
                            </Text>
                    }
                    {addingWorkout && <WorkoutsForm />}
                </SimpleGrid>
            </Box>
        </Box>
    )
})