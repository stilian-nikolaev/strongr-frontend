import React, { useState } from 'react'
import { Card } from '@mantine/core'

import ExerciseHeader from './ExerciseHeader';
import SetsGrid from '../sets/SetsGrid';

export default function ExerciseCard({ exercise }) {
    const [addingSet, setAddingSet] = useState(false);
    const [edittingExercise, setEdittingExercise] = useState(false);

    return (
        <Card
            shadow="lg"
            sx={(theme) => ({
                backgroundColor: theme.colors.brand[0],
                borderRadius: '10px',
                border: `2px solid ${theme.colors.brand[3]}`,
                '&:hover': {
                    cursor: 'default',
                    '& .more': {
                        display: 'block'
                    }
                }
            })}>
            <ExerciseHeader
                exerciseId={exercise._id}
                title={exercise.title}
                addingSet={addingSet}
                setAddingSet={setAddingSet}
                edittingExercise={edittingExercise}
                setEdittingExercise={setEdittingExercise}
            />
            <SetsGrid
                exercise={exercise}
                addingSet={addingSet}
                setAddingSet={setAddingSet}
                edittingExercise={edittingExercise}
            />
        </Card>
    )
}
