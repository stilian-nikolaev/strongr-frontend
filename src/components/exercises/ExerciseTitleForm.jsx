import React from 'react'
import { Box } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import { useMutation, useQueryClient } from 'react-query';

import { useEditExercise } from '../../hooks/exercises';
import { endpoints } from '../../service/apiEndpoints';
import GenericForm from '../common/form/GenericForm';
import TextField from '../common/form/TextField';
import SubmitButton from '../common/buttons/SubmitButton';
import { useParams } from 'react-router-dom';

export default function ExerciseTitleForm({ exerciseId, title, setEdittingTitle}) {
    const queryClient = useQueryClient();
    const focusTrapRef = useFocusTrap();
    const { workoutId } = useParams();

    const mutation = useMutation({
        mutationFn: data => useEditExercise(workoutId, exerciseId, data),
        onError: () => console.log('error editing exercise'),
        onSuccess: () => {
            setEdittingTitle(false)
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId).url)
        }
    })

    function onSubmit(data) {
        mutation.mutate(data);
    }

    return (
        <GenericForm onSubmit={onSubmit} initialValues={{ title }}>
            <Box
                ref={focusTrapRef}
                sx={{
                    display: 'flex',
                    borderBottom: '1px solid black',
                    width: '10vw',
                }}>
                <TextField
                    data-autofocus
                    variant="unstyled"
                    aria-label="title"
                    size="inherit"
                    name="title"
                    sx={{
                        paddingLeft: '0.4vw',
                        marginBottom: '5px',
                        fontSize: '1.2vw',
                        display: 'flex'
                    }}
                />
                <SubmitButton size={'1.2vw'} />
            </Box>
        </GenericForm>
    )
}
