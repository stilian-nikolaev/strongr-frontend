import { ActionIcon, Box, Button, Center, Container, TextInput } from '@mantine/core';
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
import TextField from '../common/form/TextField';
import GenericForm from '../common/form/GenericForm';
import { useMutation } from 'react-query';
import { useCreateExercise } from '../../hooks/exercises';
import { ViewStore } from '../../stores/ViewStore';


export default function ExerciseForm({  selectedWorkoutId }) {
    const { setView } = ViewStore;

    const mutation = useMutation({
        mutationFn: data => useCreateExercise(selectedWorkoutId, data),
        onError: () => console.log('error posting exercise'),
        onSuccess: (res) => {
            console.log(res);
            setView('exercises')
        }
    })

    function onSubmit(data) {
        console.log(data);
        mutation.mutate(data)
    }

    function onClose() {
        setView('exercises')
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
                    <TextField mt="xl" name="title" type="text" label="Exercise title" required />
                    <Button mt="lg" type="submit">Submit</Button>
                </GenericForm>
            </Box>
            <ActionIcon onClick={onClose} radius={50}>
                <MdClose size={30} />
            </ActionIcon>
        </Container>
    )
}
