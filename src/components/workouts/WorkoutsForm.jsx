import { ActionIcon, Box, Button, Center, Container, TextInput } from '@mantine/core';
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
import TextField from '../common/form/TextField';
import GenericForm from '../common/form/GenericForm';


export default function WorkoutsForm({ setView }) {

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
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                    <TextField name="title" type="text" label="Title" />
                    <Button type="submit">Submit</Button>
                </GenericForm>
            </Box>
            <ActionIcon onClick={() => setView('workouts')} radius={50}>
                <MdClose size={30} />
            </ActionIcon>
        </Container>
    )
}
