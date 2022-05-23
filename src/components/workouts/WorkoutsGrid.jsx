import React from 'react'
import { ActionIcon, Box, Card, Container, Group, ScrollArea, SimpleGrid, Text } from '@mantine/core'
import { MdAdd } from 'react-icons/md'

import LoadingScreen from '../common/LoadingScreen';
import ErrorScreen from '../common/ErrorScreen';
import { useWorkouts } from '../../hooks/workouts';
import { ViewStore } from '../../stores/ViewStore';
import WorkoutCard from './WorkoutCard';
import AddExerciseButton from '../exercises/AddExerciseButton';
import AddWorkoutButton from './AddWorkoutButton';
import GridHeader from './GridHeader';

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
            <GridHeader/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '60vw', marginTop: 20 }}>
                <Group sx={{
                    height: '10vw',
                    minWidth: '55vw',
                    paddingBottom: 32,
                    paddingRight: 20,
                }}>
                    {data.map(x =>
                        <WorkoutCard key={x._id} workout={x} />
                    )}
                </Group>
            </Box>
        </Box>
    )
}
