import { Box, Text } from '@mantine/core'
import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import AddSetForm from './AddSetForm';

export default function SetCard({ set, edittingExercise, exerciseId }) {
    const [edittingSet, setEdittingSet] = useState(false);

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
                {edittingExercise && <Box>
                        <Box
                            onClick={onEditClick}
                            sx={{
                                marginLeft: '0.3vw',
                                marginTop: '0.1vw',
                                height: 1,
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>
                            <FiEdit2 size={'1.2vw'} />
                        </Box>
                    </Box>
                }

            </Box>
    )
}
