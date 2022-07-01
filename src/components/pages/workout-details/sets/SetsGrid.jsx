import React from 'react'
import { Box, Text } from '@mantine/core'

import AddSetForm from './AddSetForm';
import SetCard from './SetCard'

export default function SetsGrid({ exercise, addingSet, setAddingSet, edittingExercise }) {
    function handleAddSetSubmit() {
        setAddingSet(false);
    }

    return (
        <Box sx={{ marginTop: '0.5vw' }}>
            {exercise.sets.length == 0 && !addingSet && <Text sx={{ fontSize: '1.2vw', marginLeft: '0.4vw', }}>No sets yet.</Text>}
            {
                exercise.sets.map(x =>
                    <SetCard
                        key={x._id}
                        set={x}
                        edittingExercise={edittingExercise}
                        exerciseId={exercise._id}
                    />)
            }
            {addingSet && <AddSetForm onSuccess={handleAddSetSubmit} exerciseId={exercise._id} />}
        </Box>
    )
}