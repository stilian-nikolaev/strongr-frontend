import React, { useState } from 'react'
import { Box, Card, Menu, Text } from '@mantine/core'
import { RiMoreFill } from 'react-icons/ri';

import AddSetForm from '../sets/AddSetForm';
import { useMutation, useQueryClient } from 'react-query';
import { WorkoutStore } from '../../stores/WorkoutStore';
import { useDeleteExercise } from '../../hooks/exercises';
import { endpoints } from '../../service/apiEndpoints';
import { ModalStore } from '../../stores/ModalStore';
import SetCard from '../sets/SetCard';
import { FiEdit2 } from 'react-icons/fi';
import ExerciseMenu from './ExerciseMenu';

export default function ExerciseCard({ exercise }) {
    const [addingSet, setAddingSet] = useState(false);
    const [edittingExercise, setEdittingExercise] = useState(false);



    function onEditTitleClick() {

    }

    function onAddSetSubmit() {
        setAddingSet(false);
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
                    fontSize: '1.2vw',
                    display: 'flex'
                }}>
                    {exercise.title}
                    {edittingExercise &&
                        <Box
                            onClick={onEditTitleClick}
                            sx={{
                                marginLeft: '0.3vw',
                                marginTop: '0.1vw',
                                height: 1,
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>
                            <FiEdit2 size={'1.2vw'} />
                        </Box>}
                </Text>
                <ExerciseMenu
                    exerciseId={exercise._id}
                    addingSet={addingSet}
                    edittingExercise={edittingExercise}
                    setAddingSet={setAddingSet}
                    setEdittingExercise={setEdittingExercise}
                />
            </Box>
            <Box>
                {exercise.sets.length == 0 && !addingSet &&
                    <Text sx={{ fontSize: '1.2vw', marginLeft: '0.4vw', }}>No sets yet.</Text>}
                {exercise.sets.map(x =>
                    <SetCard
                        key={x._id}
                        set={x}
                        edittingExercise={edittingExercise}
                        exerciseId={exercise._id}
                    />)}
                {addingSet && <AddSetForm onSuccess={onAddSetSubmit} exerciseId={exercise._id} />}
            </Box>
        </Card>
    )
}
