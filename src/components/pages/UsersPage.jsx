import React, { useState } from 'react'
import ExerciseGrid from '../exercises/ExercisesGrid'
import WorkoutsGrid from '../workouts/WorkoutsGrid'

export default function UsersPage() {
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

  function onBackClick() {
    setSelectedWorkoutId(null);
  }

  function onWorkoutClick(id) {
    setSelectedWorkoutId(id);
  }

  return selectedWorkoutId
      ?
      <ExerciseGrid selectedWorkoutId={selectedWorkoutId} onBackClick={onBackClick}/>
      :
      <WorkoutsGrid onWorkoutClick={onWorkoutClick} />
}
