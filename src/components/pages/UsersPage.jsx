import React from 'react'
import { observer } from 'mobx-react';
import { Navigate, Route, Routes } from 'react-router-dom'

import ExerciseForm from '../exercises/ExerciseForm';
import ExerciseGrid from '../exercises/ExercisesGrid'
import WorkoutsForm from '../workouts/WorkoutsForm';
import WorkoutsGrid from '../workouts/WorkoutsGrid'
import { ViewStore } from '../../stores/ViewStore';
import { Box } from '@mantine/core';

export default observer(function UsersPage() {
  return <Routes>
    <Route path='/' element={<Navigate replace to='/workouts'/>}/>
    <Route path='/workouts'element={ <WorkoutsGrid />} />
    <Route path='/workouts/:workoutId' element={<ExerciseGrid />} />
  </Routes>
})