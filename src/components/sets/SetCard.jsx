import { Box, Text } from '@mantine/core'
import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import SetActions from './SetActions';
import AddSetForm from './AddSetForm';
import { useMutation, useQueryClient } from 'react-query';
import { WorkoutStore } from '../../stores/WorkoutStore';
import { useDeleteSet } from '../../hooks/sets';
import { endpoints } from '../../service/apiEndpoints';

export default function SetCard({ set, edittingExercise, exerciseId }) {
    const [edittingSet, setEdittingSet] = useState(false);
    const { workoutId } = WorkoutStore;
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: () => useDeleteSet(workoutId, exerciseId, set._id),
        onError: () => console.log('error deleting set'),
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId))
        }
    })

    function onDeleteClick() {
        deleteMutation.mutate();
    }

    function onEditClick() {
        setEdittingSet(true)
    }

    function onEditSubmit() {
        setEdittingSet(false)
    }

    return (
        edittingSet ?
            <AddSetForm exerciseId={exerciseId} initialValues={set} onSuccess={onEditSubmit} />
            :
            <Box
                sx={{
                    display: 'flex',
                }}>
                <Text sx={{ fontSize: '1.2vw' }} >
                    {set.amount} reps {set.weight > 0 ? `with ${set.weight} kg` : ''}
                </Text>
                {edittingExercise && <SetActions onEditClick={onEditClick} onDeleteClick={onDeleteClick}/>}
            </Box>
    )
}
