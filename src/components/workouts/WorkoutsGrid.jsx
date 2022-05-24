import React from 'react'
import { ActionIcon, Box, Card, Container, Group, Pagination, ScrollArea, SimpleGrid, Text } from '@mantine/core'
import { MdAdd } from 'react-icons/md'

import LoadingScreen from '../common/LoadingScreen';
import ErrorScreen from '../common/ErrorScreen';
import { useWorkouts } from '../../hooks/workouts';
import { ViewStore } from '../../stores/ViewStore';
import WorkoutCard from './WorkoutCard';
import AddExerciseButton from '../exercises/AddExerciseButton';
import AddWorkoutButton from './AddWorkoutButton';
import GridHeader from './GridHeader';
import PlanGrid from './PlanGrid';

export default function WorkoutsGrid() {
    const { data, status } = useWorkouts();
    const { setView } = ViewStore;

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
            <Box sx={{ width: '55vw'}}>
                <SimpleGrid cols={5} sx={{
                    marginTop: '1.8vw',
                    height: '16vw'
                }}>
                    {data.map(x =>
                        <WorkoutCard key={x._id} workout={x} />
                    )}
                </SimpleGrid>
            </Box>
            <PlanGrid />
        </Box>
    )
}
