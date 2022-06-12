import { Box, Menu, Text } from '@mantine/core'
import React from 'react'
import { RiMoreFill } from 'react-icons/ri'
import { useMutation, useQueryClient } from 'react-query';
import { useDeleteExercise } from '../../hooks/exercises';
import { endpoints } from '../../service/apiEndpoints';
import { ModalStore } from '../../stores/ModalStore';
import { WorkoutStore } from '../../stores/WorkoutStore';

export default function ExerciseMenu(props) {
    const { openModal, closeModal, setContent, setCallback } = ModalStore;
    const { workoutId } = WorkoutStore;
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: () => useDeleteExercise(workoutId, props.exerciseId),
        onError: () => console.log('error deleting exercise'),
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId))
            closeModal();
        }
    })

    function onAddSetClick() {
        props.setAddingSet(!props.addingSet);
    }

    function onEditClick() {
        props.setEdittingExercise(!props.edittingExercise)
    }

    function onDeleteClick() {
        setContent('Are you sure you want to delete this exercise?')
        setCallback(deleteMutation.mutate)
        openModal();
    }

    return (
        <Menu
            control={
                <Box
                    className="more"
                    sx={{
                        height: '1vh',
                        display: 'none',
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }} >
                    <RiMoreFill size="1.5vw" />
                </Box >
            }
            size="7vw"
            gutter={-8}
        >
            <Menu.Item onClick={onAddSetClick}>
                <Text sx={{ fontSize: '1vw' }}>{props.addingSet ? 'Cancel' : 'Add set'}</Text>
            </Menu.Item>
            <Menu.Item onClick={onEditClick}>
                <Text sx={{ fontSize: '1vw' }}>{props.edittingExercise ? 'Finish' : 'Edit'}</Text>
            </Menu.Item>
            <Menu.Item onClick={onDeleteClick}>
                <Text sx={{ fontSize: '1vw' }}>Delete</Text>
            </Menu.Item>
        </Menu>
    )
}
