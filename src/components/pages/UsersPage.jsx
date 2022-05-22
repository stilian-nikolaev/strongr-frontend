import React from 'react'
import { observer } from 'mobx-react';

import ExerciseForm from '../exercises/ExerciseForm';
import ExerciseGrid from '../exercises/ExercisesGrid'
import WorkoutsForm from '../workouts/WorkoutsForm';
import WorkoutsGrid from '../workouts/WorkoutsGrid'
import { ViewStore } from '../../stores/ViewStore';

export default observer(function UsersPage() {
  const { view } = ViewStore

  switch (view) {
    case 'workouts':
      return <WorkoutsGrid />
    case 'exercises':
      return <ExerciseGrid />
    case 'workout-form':
      return <WorkoutsForm />
    case 'exercise-form':
      return <ExerciseForm />
    default:
      return <WorkoutsGrid />
      break;
  }
})