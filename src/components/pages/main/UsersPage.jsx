import React from 'react'
import { observer } from 'mobx-react';
import { Navigate, Route, Routes } from 'react-router-dom'

import ExerciseGrid from '../../exercises/ExercisesGrid'
import WorkoutsPage from '../WorkoutsPage';
import WorkoutDetailsPage from '../WorkoutDetailsPage';

export default observer(function UsersPage() {
  return <Routes>
    <Route path='/' element={<Navigate replace to='/workouts'/>}/>
    <Route path='/workouts'element={ <WorkoutsPage />} />
    <Route path='/workouts/:workoutId' element={<WorkoutDetailsPage />} />
  </Routes>
})