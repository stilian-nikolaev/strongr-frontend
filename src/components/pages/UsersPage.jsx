import { observer } from 'mobx-react';
import React, { useState } from 'react'
import { ViewStore } from '../../stores/ViewStore';
import ExerciseForm from '../exercises/ExerciseForm';
import ExerciseGrid from '../exercises/ExercisesGrid'
import WorkoutsForm from '../workouts/WorkoutsForm';
import WorkoutsGrid from '../workouts/WorkoutsGrid'

export default observer(function UsersPage() {
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
  const { view } = ViewStore

  function onBackClick() {
    setSelectedWorkoutId(null);
  }

  function onWorkoutClick(id) {
    setSelectedWorkoutId(id);
  }

  switch (view) {
    case 'workouts':
      return <WorkoutsGrid onWorkoutClick={onWorkoutClick} />
    case 'exercises':
      return <ExerciseGrid  selectedWorkoutId={selectedWorkoutId} onBackClick={onBackClick} />
    case 'workout-form':
      return <WorkoutsForm  />
    case 'exercise-form':
      return <ExerciseForm selectedWorkoutId={selectedWorkoutId} />
    default:
      return <WorkoutsGrid onWorkoutClick={onWorkoutClick} />
      break;
  }
})