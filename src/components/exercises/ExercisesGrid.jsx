import React, { useState } from 'react'
import { observer } from 'mobx-react';
import { ActionIcon, Box, SimpleGrid, Text, Container, Button, Menu } from '@mantine/core'
import { MdClose } from 'react-icons/md'

import ExerciseCard from './ExerciseCard';
import ErrorScreen from '../common/ErrorScreen';
import LoadingScreen from '../common/LoadingScreen';
import { useDeleteWorkout, useWorkout } from '../../hooks/workouts';
import { ViewStore } from '../../stores/ViewStore';
import { WorkoutStore } from '../../stores/WorkoutStore';
import CloseButton from '../common/CloseButton';
import { RiMoreFill } from 'react-icons/ri';
import EditTitleForm from './EditTitleForm';
import { useMutation } from 'react-query';


export default observer(function ExercisesGrid() {
    const { workoutId } = WorkoutStore;
    const { setView, editingTitle, toggleEditingTitle } = ViewStore;
    const { data, status } = useWorkout(workoutId);

    const deleteMutation = useMutation({
        mutationFn: () => useDeleteWorkout(workoutId),
        onError: () => console.log('error deleting workout'),
        onSuccess: (res) => {
            //open comfirmation
            setView('workouts')
        }
    })

    function onAddExerciseClick() {
        setView('exercise-form');
    }

    function onEditTitleClick() {
        toggleEditingTitle();
    }

    function onDeleteWorkoutClick() {
        deleteMutation.mutate();
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
                    paddingRight: editingTitle ? '1.7vw' : '4vw',
                    borderBottom: '2px solid black',
                    display: 'flex',
                    '&:hover': {
                        paddingRight: '1.7vw',
                        '& .title-more': {
                            display: editingTitle ? 'none' : 'block'
                        }
                    }
                }}>
                    {editingTitle ? <EditTitleForm title={data.title} /> :
                        <Text sx={{ fontSize: '2.4vw' }}>
                            {data.title}
                        </Text>}
                    <Menu
                        control={
                            <Box
                                className="title-more"
                                sx={{
                                    display: 'none',
                                    marginLeft: '0.8vw',
                                    marginTop: '1vw',
                                    height: '1vh',
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }} >
                                <RiMoreFill size="1.4vw" />
                            </Box >
                        }
                        size="11vw"
                        gutter={-8}
                    >
                        <Menu.Item onClick={onEditTitleClick}>
                            <Text sx={{ fontSize: '1vw' }}>Rename workout</Text>
                        </Menu.Item>
                        <Menu.Item onClick={onDeleteWorkoutClick}>
                            <Text sx={{ fontSize: '1vw' }}>Delete workout</Text>
                        </Menu.Item>
                    </Menu>

                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Button onClick={onAddExerciseClick} color="dark" size="md" mr="md">
                        <Text sx={{ fontSize: '1vw' }}>Add exercise</Text>
                    </Button>
                    <CloseButton onClose={onClose} />
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