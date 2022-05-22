import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { ActionIcon, Box, Button, Card, Container, Text, UnstyledButton } from '@mantine/core';
import { MdClose, MdDone } from 'react-icons/md';

import TextField from '../common/form/TextField';
import GenericForm from '../common/form/GenericForm';
import { useCreateExercise } from '../../hooks/exercises';
import { ViewStore } from '../../stores/ViewStore';
import { WorkoutStore } from '../../stores/WorkoutStore';
import { endpoints } from '../../service/apiEndpoints';

export default function ExerciseForm() {
    const { workoutId } = WorkoutStore;
    const { toggleAddingExercise } = ViewStore;
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: data => useCreateExercise(workoutId, data),
        onError: () => console.log('error posting exercise'),
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId).url)
                .then(() => toggleAddingExercise())
        }
    })

    function onSubmit(data) {
        mutation.mutate(data)
    }

    return (
        <Card
            shadow="lg"
            sx={{
                backgroundColor: 'pink',
                borderRadius: '10px',
                border: '2px solid grey',
                '&:hover': {
                    cursor: 'default',
                    '& .more': {
                        display: 'block'
                    }
                }
            }}>
            <GenericForm initialValues={{ title: '' }} onSubmit={onSubmit}>
                <Box sx={{ display: 'flex' }}>
                    <TextField
                        variant="unstyled"
                        size="1.2vw"
                        placeholder="Workout title"
                        aria-label="title"
                        name="title"
                        sx={{
                            borderBottom: '1px solid black',
                            width: '10vw',
                            marginLeft: '-0.15vw',
                            marginBottom: '5px',
                            fontSize: '1.2vw',
                            height: '2vw',
                            '& ::placeholder': {
                                color: '#818589'
                            }
                        }}
                    />
                    <UnstyledButton
                        type="submit"
                        sx={{
                            marginLeft: '0.5vw',
                            marginTop: '0.4vw',
                            height: 1,
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}>
                        <MdDone size="1vw" type="submit" />
                    </UnstyledButton>
                </Box>
            </GenericForm>
            <Text sx={{ fontSize: '1.2vw' }}>No sets yet.</Text>
        </Card>
    )
}
