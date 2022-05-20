import { ActionIcon, Box, Button, Center, Container, TextInput } from '@mantine/core';
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
import TextField from '../common/form/TextField';
import GenericForm from '../common/form/GenericForm';
import { useMutation } from 'react-query';
import { useCreateWorkout } from '../../hooks/workouts';


export default function WorkoutsForm({ setView }) {
        
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
            <ActionIcon onClick={() => setView('workouts')} radius={50}>
                <MdClose size={30} />
            </ActionIcon>
        </Container>
    )
}
