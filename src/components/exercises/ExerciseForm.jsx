import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import {  Box,  Card, Text } from '@mantine/core';

import TextField from '../common/form/TextField';
import GenericForm from '../common/form/GenericForm';
import { useCreateExercise } from '../../hooks/exercises';
import { ViewStore } from '../../stores/ViewStore';
import { endpoints } from '../../service/apiEndpoints';
import { useFocusTrap } from '@mantine/hooks';
import SubmitButton from '../common/buttons/SubmitButton';
import { useParams } from 'react-router-dom';

export default function ExerciseForm() {
    const { workoutId } = useParams()
    const { toggleAddingExercise } = ViewStore;
    const queryClient = useQueryClient();
    const focusTrapRef = useFocusTrap();

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
                border: '2px solid #353935',
                '&:hover': {
                    cursor: 'default',
                    '& .more': {
                        display: 'block'
                    }
                }
            }}>
            <GenericForm initialValues={{ title: '' }} onSubmit={onSubmit}>
                <Box ref={focusTrapRef} sx={{ display: 'flex' }}>
                    <TextField
                        data-autofocus
                        variant="unstyled"
                        size="1.2vw"
                        required
                        placeholder="Exercise title"
                        aria-label="title"
                        name="title"
                        sx={{
                            paddingLeft: '0.4vw',
                            borderBottom: '1px solid black',
                            width: '10vw',
                            marginLeft: '-0.15vw',
                            marginBottom: '5px',
                            fontSize: '1.2vw',
                            height: '2vw',
                            '& ::placeholder': {
                                color: '#808080 !important'
                            }
                        }}
                    />
                    <SubmitButton sx={{ marginLeft: '0.5vw', marginTop: '0.4vw' }} />
                </Box>
            </GenericForm>
            <Text sx={{ fontSize: '1.2vw', marginLeft: '0.4vw', }}>No sets yet.</Text>
        </Card>
    )
}
