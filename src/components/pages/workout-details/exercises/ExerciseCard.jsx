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
