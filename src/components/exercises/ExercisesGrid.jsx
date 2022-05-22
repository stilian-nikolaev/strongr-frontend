import React, { useState } from 'react'
import { observer } from 'mobx-react';
import { ActionIcon, Box, SimpleGrid, Text, Container, Button, Menu, UnstyledButton } from '@mantine/core'
import { MdClose } from 'react-icons/md'
import { HiPlus } from 'react-icons/hi'

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
import ExerciseForm from './ExerciseForm';
import { useHover } from '@mantine/hooks';


export default observer(function ExercisesGrid() {
    const { workoutId } = WorkoutStore;
    const { setView, editingTitle, addingExercise, toggleAddingExercise, toggleEditingTitle } = ViewStore;
    const { data, status } = useWorkout(workoutId);
    const { isOverButton, ref } = useHover()

    const deleteMutation = useMutation({
        mutationFn: () => useDeleteWorkout(workoutId),
        onError: () => console.log('error deleting workout'),
        onSuccess: (res) => {
            //open comfirmation
            setView('workouts')
        }
    })

    function onAddExerciseClick() {
        toggleAddingExercise();
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
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <UnstyledButton
                        onClick={onAddExerciseClick}
                        mr="md"
                        sx={{
                            backgroundColor: 'black',
                            borderRadius: '50%',
                            width: '3vw',
                            height: '3vw',
                            display: 'grid',
                            placeItems: 'center',
                            transition: 'all .15s ease-in-out',
                            '&:hover': {
                                borderRadius: 10,
                                width: '10vw',
                                '& .plus': {
                                    display: 'none',
                                },
                                '& .text': {
                                    color: 'white',
                                    fontSize: '1vw',
                                    visibility: 'visible',
                                }
                            }
                        }}>
                        <Box sx={{ marginBottom: '-1.5vw'}}>
                            <HiPlus className="plus" color="white" size={'1.5vw'} />
                        </Box>
                        <Text
                            className="text"
                            sx={{
                                color: 'black',
                                fontSize: '0vw',
                                visibility: 'hidden',
                                marginTop: '-1.5vw',
                                transition: 'all .15s'
                            }}>
                            {addingExercise ? 'Cancel' : 'Add exercise'}
                        </Text>
                    </UnstyledButton>
                    <CloseButton onClose={onClose} />
                </Box>
            </Box>
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