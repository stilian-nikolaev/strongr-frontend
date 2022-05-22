import React from 'react'
import { useMutation } from 'react-query';
import { ActionIcon, Box, Button, Container } from '@mantine/core';
import { MdClose } from 'react-icons/md';

import TextField from '../common/form/TextField';
import GenericForm from '../common/form/GenericForm';
import { useCreateWorkout } from '../../hooks/workouts';
import { ViewStore } from '../../stores/ViewStore';


export default function WorkoutsForm() {
    const { setView } = ViewStore;

    const mutation = useMutation({
        mutationFn: useCreateWorkout(),
        onError: () => console.log('error posting workout'),
        onSuccess: (res) => {
            console.log(res);
            setView('workouts')
        }
    })

    function onSubmit(data) {
        mutation.mutate(data)
    }

    function onClose() {
        setView('workouts')
    }

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '60vw',
            marginTop: 10,
            padding: 0,
        }}>
            <Box sx={{ width: '60vw' }}>
                <GenericForm
                    initialValues={{
                        title: '',
                    }}
                    onSubmit={onSubmit}>
                    <TextField mt="xl" name="title" type="text" label="Workout title" required />
                    <Button mt="lg" type="submit">Submit</Button>
                </GenericForm>
            </Box>
            <ActionIcon onClick={onClose} radius={50}>
                <MdClose size={30} />
            </ActionIcon>
        </Container>
    )
}
