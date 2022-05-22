import React from 'react'
import { useMutation } from 'react-query';
import { ActionIcon, Box, Button, Card, Container, Text } from '@mantine/core';
import { MdClose } from 'react-icons/md';

import TextField from '../common/form/TextField';
import GenericForm from '../common/form/GenericForm';
import { useCreateExercise } from '../../hooks/exercises';
import { ViewStore } from '../../stores/ViewStore';
import { WorkoutStore } from '../../stores/WorkoutStore';
import CloseButton from '../common/CloseButton';

export default function ExerciseForm() {
    const { workoutId } = WorkoutStore;
    const { setView } = ViewStore;

    const mutation = useMutation({
        mutationFn: data => useCreateExercise(workoutId, data),
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
        <Card
            shadow="lg"
            sx={{
                backgroundColor: 'pink',
                borderRadius: '10px',
                border: '2px solid grey',
                '&:hover': {
                    cursor: 'default',
                    '& .more': {
                        display: 'block'
                    }
                }
            }}>
            <Text sx={{
                borderBottom: '1px solid black',
                width: '10vw',
                marginBottom: '5px',
                fontSize: '1.2vw'
            }}>
                TItle
            </Text>
        </Card>
    )
}
