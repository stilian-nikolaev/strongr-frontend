import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { Box, Card, Text } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import * as yup from 'yup'

import TextField from '../../../common/form/TextField';
import GenericForm from '../../../common/form/GenericForm';
import SubmitButton from '../../../common/buttons/SubmitButton';
import { useCreateExercise } from '../../../../hooks/exercises';
import { ViewStore } from '../../../../stores/ViewStore';
import { endpoints } from '../../../../service/apiEndpoints';

const validationSchema = yup
    .object({
        title: yup.string().trim().min(1).max(25).required(),
    })

const initialValues = { title: '' }

export default function ExerciseForm() {
    const { toggleAddingExercise } = ViewStore;
    const { workoutId } = useParams()
    const queryClient = useQueryClient();
    const focusTrapRef = useFocusTrap();

    const mutation = useMutation({
        mutationFn: data => useCreateExercise(workoutId, data),
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId).url)
                .then(() => toggleAddingExercise())
        }
    })

    function handleSubmit(data) {
        mutation.mutate(data)
    }

    return (
        <Card
            shadow="lg"
            sx={(theme) => ({
                backgroundColor: theme.colors.main[0],
                borderRadius: '10px',
                border: `2px solid ${theme.colors.common[2]}`,
                '&:hover': {
                    cursor: 'default',
                    '& .more': {
                        display: 'block'
                    }
                }
            })}>
            <GenericForm validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
                <Box ref={focusTrapRef} sx={{ display: 'flex' }}>
                    <TextField
                        inlineError={false}
                        variant="unstyled"
                        size="1.2vw"
                        placeholder="Exercise title"
                        aria-label="title"
                        name="title"
                        sx={(theme) => ({
                            borderBottom: `1px solid ${theme.colors.common[0]}`,
                            paddingLeft: '0.4vw',
                            width: '10vw',
                            marginLeft: '-0.15vw',
                            marginBottom: '5px',
                            fontSize: '1.2vw',
                            height: '2vw',
                            '& ::placeholder': {
                                color: `${theme.colors.common[1]} !important`
                            }
                        })}
                    />
                    <SubmitButton sx={{ marginLeft: '0.5vw', marginTop: '0.4vw' }} />
                </Box>
            </GenericForm>
            <Text sx={{ fontSize: '1.2vw', marginLeft: '0.4vw', }}>No sets yet.</Text>
        </Card>
    )
}
