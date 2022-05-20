import React, { useState } from 'react'
import ExerciseGrid from '../exercises/ExercisesGrid'
import WorkoutsForm from '../workouts/WorkoutsForm';
import WorkoutsGrid from '../workouts/WorkoutsGrid'

export default function UsersPage() {
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
  const [view, setView] = useState('workouts');

  function onBackClick() {
    setSelectedWorkoutId(null);
  }

  function onWorkoutClick(id) {
    setSelectedWorkoutId(id);
  }

  switch (view) {
    case 'workouts':
      return <WorkoutsGrid setView={setView} onWorkoutClick={onWorkoutClick} />
    case 'exercises':
      return <ExerciseGrid setView={setView} selectedWorkoutId={selectedWorkoutId} onBackClick={onBackClick} />
    case 'workout-form':
      return <WorkoutsForm setView={setView} />
    default:
      return <WorkoutsGrid onWorkoutClick={onWorkoutClick} />
      break;
  }
}
