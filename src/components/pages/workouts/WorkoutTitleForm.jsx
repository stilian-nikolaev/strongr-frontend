import React from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import { Box } from '@mantine/core'
import { useFocusTrap } from '@mantine/hooks'
import * as yup from 'yup'

import SubmitButton from '../../common/buttons/SubmitButton'
import GenericForm from '../../common/form/GenericForm'
import TextField from '../../common/form/TextField'
import { endpoints } from '../../../service/apiEndpoints'
import { ViewStore } from '../../../stores/ViewStore'
import { useEditWorkout } from '../../../hooks/workouts'

const validationSchema = yup
    .object({
        title: yup.string().trim().min(1).max(25).required(),
    })

export default function WorkoutTitleForm({ title }) {
    const { toggleEditingTitle } = ViewStore;
    const { workoutId } = useParams();
    const queryClient = useQueryClient();
    const focusTrapRef = useFocusTrap();

    const mutation = useMutation({
        mutationFn: data => useEditWorkout(workoutId, data),
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId).url)
                .then(() => toggleEditingTitle())
        }
    })

    function handleSubmit(data) {
        mutation.mutate(data);
    }

    return (
        <GenericForm onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={{ title }}>
            <Box ref={focusTrapRef} sx={{ display: 'flex' }}>
                <TextField
                    inlineError={false}
                    placeholder="Title"
                    variant="unstyled"
                    aria-label="title"
                    size="inherit"
                    name="title"
                    sx={theme => ({
                        width: `${title.length * 1.4}vw`,
                        fontSize: '2.2vw',
                        height: "3.8vw",
                        '& ::placeholder': {
                            color: `${theme.colors.common[1]} !important`
                        }
                    })}
                />
                <SubmitButton size={'1.6vw'} sx={{ marginTop: '0.4vw' }} />
            </Box>
        </GenericForm>
    )
}