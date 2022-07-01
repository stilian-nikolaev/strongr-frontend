import React from 'react'
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { Box } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import * as yup from 'yup'

import GenericForm from '../../../common/form/GenericForm';
import TextField from '../../../common/form/TextField';
import SubmitButton from '../../../common/buttons/SubmitButton';
import { useEditExercise } from '../../../../hooks/exercises';
import { endpoints } from '../../../../service/apiEndpoints';

const validationSchema = yup
    .object({
        title: yup.string().trim().min(1).max(25).required(),
    })

export default function ExerciseTitleForm({ exerciseId, title, setEdittingTitle }) {
    const queryClient = useQueryClient();
    const focusTrapRef = useFocusTrap();
    const { workoutId } = useParams();

    const mutation = useMutation({
        mutationFn: data => useEditExercise(workoutId, exerciseId, data),
        onSuccess: () => {
            setEdittingTitle(false)
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId).url)
        }
    })

    function handleSubmit(data) {
        mutation.mutate(data);
    }

    return (
        <GenericForm onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={{ title }}>
            <Box
                ref={focusTrapRef}
                sx={(theme) => ({
                    borderBottom: `1px solid ${theme.colors.common[0]}`,
                    display: 'flex',
                    width: '10vw',
                })}>
                <TextField
                    inlineError={false}
                    variant="unstyled"
                    placeholder="Title"
                    aria-label="title"
                    size="inherit"
                    name="title"
                    showE
                    sx={theme => ({
                        paddingLeft: '0.4vw',
                        marginBottom: '5px',
                        fontSize: '1.2vw',
                        display: 'flex',
                        '& ::placeholder': {
                            color: `${theme.colors.common[1]} !important`
                        }
                    })}
                />
                <SubmitButton size={'1.2vw'} />
            </Box>
        </GenericForm>
    )
}
