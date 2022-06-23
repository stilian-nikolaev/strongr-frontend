import React from 'react'
import { observer } from 'mobx-react';
import { Navigate, Route, Routes } from 'react-router-dom'

import WorkoutsPage from '../WorkoutsPage';
import WorkoutDetailsPage from '../WorkoutDetailsPage';
import ProfilePage from '../ProfilePage';
import SettingsPage from '../SettingsPage';

export default observer(function UsersPage() {
  return <Routes>
    <Route path='/' element={<Navigate replace to='/workouts'/>}/>
    <Route path='/workouts'element={ <WorkoutsPage />} />
    <Route path='/workouts/:workoutId' element={<WorkoutDetailsPage />} />
    <Route path='/profile' element={<ProfilePage />} />
    <Route path='/settings' element={<SettingsPage />} />
  </Routes>
})