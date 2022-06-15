import React, { useState } from 'react'
import { Box, Text } from '@mantine/core'

import EditButton from '../common/buttons/EditButton'
import ExerciseMenu from './ExerciseMenu'
import ExerciseTitleForm from './ExerciseTitleForm'

export default function ExerciseHeader({
    exerciseId,
    title,
    addingSet,
    setAddingSet,
    edittingExercise,
    setEdittingExercise
}) {
    const [editingTitle, setEdittingTitle] = useState(false)

    function onEditTitleClick() {
        setEdittingTitle(true)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {editingTitle ?
                <ExerciseTitleForm
                    title={title}
                    exerciseId={exerciseId}
                    setEdittingTitle={setEdittingTitle}
                />
                :
                <Box sx={{display: 'flex', 
                justifyContent: 'space-between',
                    borderBottom: '1px solid black',
                    width: '11vw',

                }}>
                    <Text sx={{
                        width: '9.5vw',
                        paddingLeft: '0.4vw',
                        marginBottom: '5px',
                        fontSize: '1.2vw',
                    }}>
                        {title}
                    </Text>
                    {edittingExercise &&
                        <EditButton
                            onClick={onEditTitleClick}
                            sx={{ marginLeft: '0.3vw', marginTop: '0.1vw', }}
                        />}
                </Box>}
            <ExerciseMenu
                edittingExercise={edittingExercise}
                exerciseId={exerciseId}
                addingSet={addingSet}
                setAddingSet={setAddingSet}
                setEdittingExercise={setEdittingExercise}
            />
        </Box>
    )
}
