import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Box, Text, UnstyledButton } from '@mantine/core'

import GenericForm from '../../common/form/GenericForm'
import TextField from '../../common/form/TextField'
import { endpoints } from '../../../service/apiEndpoints'
import { ViewStore } from '../../../stores/ViewStore'
import { useEditWorkout } from '../../../hooks/workouts'
import { useFocusTrap } from '@mantine/hooks'
import SubmitButton from '../../common/buttons/SubmitButton'
import { useParams } from 'react-router-dom'

export default function WorkoutTitleForm({ title }) {
    const { toggleEditingTitle } = ViewStore;
    const { workoutId } = useParams();
    const queryClient = useQueryClient();
    const focusTrapRef = useFocusTrap();


    const mutation = useMutation({
        mutationFn: data => useEditWorkout(workoutId, data),
        onError: () => console.log('error editing workout'),
        onSuccess: () => {
            toggleEditingTitle();
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId).url)
        }
    })

    function onSubmit(data) {
        mutation.mutate(data);
    }

    return (
        <GenericForm onSubmit={onSubmit} initialValues={{ title }}>
            <Box ref={focusTrapRef} sx={{ display: 'flex' }}>
                <TextField
                    data-autofocus
                    variant="unstyled"
                    aria-label="title"
                    size="inherit"
                    name="title"
                    sx={{ width: `${title.length * 1.4}vw`, fontSize: '2.2vw', height: "3.8vw" }}
                />
                <SubmitButton size={'1.6vw'} sx={{ marginTop: '0.4vw' }} />
            </Box>
        </GenericForm>
    )
}