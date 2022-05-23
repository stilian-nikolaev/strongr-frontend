import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Box, Text, UnstyledButton } from '@mantine/core'
import { MdDone } from 'react-icons/md'

import GenericForm from '../common/form/GenericForm'
import Select from '../common/form/Select'
import TextField from '../common/form/TextField'
import { endpoints } from '../../service/apiEndpoints'
import { ViewStore } from '../../stores/ViewStore'
import { WorkoutStore } from '../../stores/WorkoutStore'
import { useEditWorkout } from '../../hooks/workouts'
import { useFocusTrap } from '@mantine/hooks'

export default function EditTitleForm({ title }) {
    const { toggleEditingTitle } = ViewStore;
    const { workoutId } = WorkoutStore;
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
                <UnstyledButton
                    type="submit"
                    sx={{
                        height: 1,
                        marginTop: '0.4vw',
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}>
                    <MdDone size="1.6vw" type="submit" />
                </UnstyledButton>
            </Box>
        </GenericForm>
    )
}