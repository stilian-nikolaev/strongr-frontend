import { Box, Text } from '@mantine/core'
import React from 'react'
import { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import ExerciseTitleForm from './ExerciseTitleForm'

export default function ExerciseHeader({title, edittingExercise, exerciseId}) {
    const [editingTitle, setEdittingTitle] = useState(false)    

    function onEditTitleClick() {
        setEdittingTitle(true)
    }

    return (
        editingTitle ?
        <ExerciseTitleForm title={title} exerciseId={exerciseId} setEdittingTitle={setEdittingTitle}/>
        :
        <Text sx={{
            borderBottom: '1px solid black',
            width: '10vw',
            paddingLeft: '0.4vw',
            marginBottom: '5px',
            fontSize: '1.2vw',
            display: 'flex'
        }}>
            {title}
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
    )
}
