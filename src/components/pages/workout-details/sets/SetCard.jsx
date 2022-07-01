import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { Box, Text } from '@mantine/core'

import SetActions from './SetActions';
import AddSetForm from './AddSetForm';
import { useDeleteSet } from '../../../../hooks/sets';
import { endpoints } from '../../../../service/apiEndpoints';
import { useParams } from 'react-router-dom';

export default function SetCard({ set, edittingExercise, exerciseId }) {
    const [edittingSet, setEdittingSet] = useState(false);
    const queryClient = useQueryClient();
    const { workoutId } = useParams();

    const deleteMutation = useMutation({
        mutationFn: () => useDeleteSet(workoutId, exerciseId, set._id),
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId))
        }
    })

    function handleDeleteClick() {
        deleteMutation.mutate();
    }

    function handleEditClick() {
        setEdittingSet(true)
    }

    function handleEditSubmit() {
        setEdittingSet(false)
    }

    return (
        edittingSet ?
            <AddSetForm exerciseId={exerciseId} initialValues={set} onSuccess={handleEditSubmit} />
            :
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                <Text sx={{ fontSize: '1.2vw' }} >
                    {set.amount} {set.unit} {set.weight > 0 ? `with ${set.weight} kg` : ''}
                </Text>
                {edittingExercise && <SetActions onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />}
            </Box>
    )
}
