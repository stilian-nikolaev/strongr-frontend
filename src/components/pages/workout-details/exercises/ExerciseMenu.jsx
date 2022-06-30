import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { Box, Menu, Text } from '@mantine/core'
import { RiMoreFill } from 'react-icons/ri'

import CloseButton from '../../../common/buttons/CloseButton';
import { useDeleteExercise } from '../../../../hooks/exercises';
import { endpoints } from '../../../../service/apiEndpoints';
import { ModalStore } from '../../../../stores/ModalStore';

export default function ExerciseMenu({ exerciseId, setAddingSet, setEdittingExercise, edittingExercise, addingSet }) {
    const { openModal, closeModal, setContent, setCallback } = ModalStore;
    const { workoutId } = useParams()
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: () => useDeleteExercise(workoutId, exerciseId),
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId))
            closeModal();
        }
    })

    function handleAddSetClick() {
        setAddingSet(!addingSet);
    }

    function handleEditClick() {
        setEdittingExercise(true)
    }

    function handleDeleteClick() {
        setContent('Are you sure you want to delete this exercise?')
        setCallback(deleteMutation.mutate)
        openModal();
    }

    function handleClose() {
        setEdittingExercise(false)
    }

    return (
        edittingExercise ?
            <CloseButton onClick={handleClose} />
            :
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
                <Menu.Item onClick={handleAddSetClick}>
                    <Text sx={{ fontSize: '1vw' }}>{addingSet ? 'Cancel' : 'Add set'}</Text>
                </Menu.Item>
                <Menu.Item onClick={handleEditClick}>
                    <Text sx={{ fontSize: '1vw' }}>Edit</Text>
                </Menu.Item>
                <Menu.Item onClick={handleDeleteClick}>
                    <Text sx={{ fontSize: '1vw' }}>Delete</Text>
                </Menu.Item>
            </Menu>
    )
}
