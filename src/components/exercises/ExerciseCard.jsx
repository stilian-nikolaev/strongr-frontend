import React, { useState } from 'react'
import { Box, Card, Menu, Text } from '@mantine/core'
import { RiMoreFill } from 'react-icons/ri';

import AddSetForm from './AddSetForm';
import { useMutation, useQueryClient } from 'react-query';
import { WorkoutStore } from '../../stores/WorkoutStore';
import { useDeleteExercise } from '../../hooks/exercises';
import { endpoints } from '../../service/apiEndpoints';
import { ModalStore } from '../../stores/ModalStore';
import SetCard from './SetCard';

export default function ExerciseCard({ exercise }) {
    const [addingSet, setAddingSet] = useState(false);
    const [edittingExercise, setEdittingExercise] = useState(false);
    const { openModal, closeModal, setContent, setCallback } = ModalStore;
    const { workoutId } = WorkoutStore;
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: () => useDeleteExercise(workoutId, exercise._id),
        onError: () => console.log('error deleting exercise'),
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId))
            closeModal();
        }
    })

    function onAddSetSubmit() {
        setAddingSet(false);
    }

    function onAddSetClick() {
        setAddingSet(!addingSet);
    }

    function onEditClick() {
        setEdittingExercise(!edittingExercise)
    }

    function onDeleteClick() {
        setContent('Are you sure you want to delete this exercise?')
        setCallback(deleteMutation.mutate)
        openModal();
    }

    return (
        <Card
            shadow="lg"
            sx={{
                backgroundColor: 'pink',
                borderRadius: '10px',
                border: '2px solid #353935',
                '&:hover': {
                    cursor: 'default',
                    '& .more': {
                        display: 'block'
                    }
                }
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text sx={{ 
                    borderBottom: '1px solid black',
                 width: '10vw', 
                 paddingLeft: '0.4vw',
                 marginBottom: '5px',
                 fontSize: '1.2vw'}}>
                    {exercise.title}
                </Text>
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
                    <Text sx={{fontSize: '1vw'}}>{addingSet ? 'Cancel' : 'Add set'}</Text>
                    </Menu.Item>
                    <Menu.Item onClick={onEditClick}>
                        <Text sx={{fontSize: '1vw'}}>{edittingExercise ? 'Finish' : 'Edit'}</Text>
                    </Menu.Item>
                    <Menu.Item onClick={onDeleteClick}>
                    <Text sx={{fontSize: '1vw'}}>Delete</Text>
                    </Menu.Item>
                </Menu>
            </Box>
            <Box>
                {exercise.sets.length == 0 && !addingSet && 
                <Text sx={{fontSize: '1.2vw', marginLeft: '0.4vw',}}>No sets yet.</Text>}
                {exercise.sets.map(x =>
                   <SetCard key={x._id} set={x} edittingExercise={edittingExercise} exerciseId={exercise._id} />)}
                {addingSet && <AddSetForm onSuccess={onAddSetSubmit} exerciseId={exercise._id} />}
            </Box>
        </Card>
    )
}
