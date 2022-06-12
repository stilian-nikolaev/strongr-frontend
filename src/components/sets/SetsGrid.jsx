import { Box, Text } from '@mantine/core'
import React from 'react'
import AddSetForm from './AddSetForm';
import SetCard from './SetCard'

export default function SetsGrid({exercise, addingSet,setAddingSet, edittingExercise}) {
    function onAddSetSubmit() {
        setAddingSet(false);
    }

    return (
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
    )
}
