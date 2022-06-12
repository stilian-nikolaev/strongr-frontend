import React, { useState } from 'react'
import { Box, Card, Menu, Text } from '@mantine/core'

import AddSetForm from '../sets/AddSetForm';
import SetCard from '../sets/SetCard';
import ExerciseMenu from './ExerciseMenu';
import ExerciseHeader from './ExerciseHeader';
import CloseButton from '../common/CloseButton';

export default function ExerciseCard({ exercise }) {
    const [addingSet, setAddingSet] = useState(false);
    const [edittingExercise, setEdittingExercise] = useState(false);

    function onAddSetSubmit() {
        setAddingSet(false);
    }

    function onCloseButtonClick() {
        setEdittingExercise(false)
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
                <ExerciseHeader
                    title={exercise.title}
                    edittingExercise={edittingExercise}
                    exerciseId={exercise._id}
                />
                {
                    edittingExercise ?
                        <CloseButton onClick={onCloseButtonClick} />
                        :
                        <ExerciseMenu
                            exerciseId={exercise._id}
                            addingSet={addingSet}
                            edittingExercise={edittingExercise}
                            setAddingSet={setAddingSet}
                            setEdittingExercise={setEdittingExercise}
                        />
                }
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
