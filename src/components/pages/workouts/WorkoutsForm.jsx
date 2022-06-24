import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { Box, Button, Card, Container, Text } from '@mantine/core';

import TextField from '../../common/form/TextField';
import GenericForm from '../../common/form/GenericForm';
import { useCreateWorkout } from '../../../hooks/workouts';
import { ViewStore } from '../../../stores/ViewStore';
import SubmitButton from '../../common/buttons/SubmitButton';
import { useFocusTrap } from '@mantine/hooks';
import { endpoints } from '../../../service/apiEndpoints';


export default function WorkoutsForm() {
    const { toggleAddingWorkout } = ViewStore;
    const focusTrapRef = useFocusTrap();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: data => useCreateWorkout(data),
        onSuccess: (res) => {
            queryClient.invalidateQueries(endpoints.workouts.all().url)
                .then(() => toggleAddingWorkout())
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
                    cursor: 'pointer'
                }
            }}>
            <GenericForm
                initialValues={{
                    title: '',
                }}
                onSubmit={onSubmit}>
                <Box ref={focusTrapRef} sx={{ display: 'flex' }}>
                    <TextField
                        data-autofocus
                        required
                        variant="unstyled"
                        size="1.2vw"
                        placeholder="Title"
                        aria-label="title"
                        name="title"
                        sx={{
                            paddingLeft: '0.4vw',
                            borderBottom: '1px solid black',
                            width: '7vw',
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
            <Box>
                <Text sx={{ fontSize: '1vw' }}>Exercises: 0</Text>
                <Text sx={{ fontSize: '1vw' }}>Sets: 0</Text>
            </Box>
        </Card>



    )
}
