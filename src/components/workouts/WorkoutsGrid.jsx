import React from 'react'
import { ActionIcon, Box, Card, Container, Group, Pagination, ScrollArea, SimpleGrid, Text } from '@mantine/core'
import { MdAdd } from 'react-icons/md'

import LoadingScreen from '../common/LoadingScreen';
import ErrorScreen from '../common/ErrorScreen';
import { useWorkouts } from '../../hooks/workouts';
import { ViewStore } from '../../stores/ViewStore';
import WorkoutCard from './WorkoutCard';
import GridHeader from './GridHeader';
import WorkoutsForm from './WorkoutsForm';
import { observer } from 'mobx-react';

export default observer(function WorkoutsGrid() {
    const { data, status } = useWorkouts();
    const { addingWorkout } = ViewStore;

    if (status === 'loading') {
        return <LoadingScreen />
    }

    if (status === 'error') {
        return <ErrorScreen />
    }

    return (
        <Box sx={{
            marginTop: '1vw',
        }}>
            <GridHeader />
            <Box sx={{ width: '55vw' }}>
                <SimpleGrid cols={5} sx={{
                    marginTop: '1.8vw',
                }}>
                    {data.length != 0
                        ?
                        data.map(x =>
                            <WorkoutCard key={x._id} workout={x} />
                        )
                        :
                        !addingWorkout && <Text sx={{ fontSize: 18 }}>You don't have any workouts yet.</Text>
                    }
                    {addingWorkout && <WorkoutsForm />}
                </SimpleGrid>
            </Box>
        </Box>
    )
})
