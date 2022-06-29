import React, { useEffect } from 'react'
import { observer } from 'mobx-react';
import { Navigate, Route, Routes } from 'react-router-dom'

import WorkoutsPage from '../workouts/WorkoutsPage';
import WorkoutDetailsPage from '../workout-details/WorkoutDetailsPage';
import ProfilePage from '../profile/ProfilePage';
import SettingsPage from '../settings/SettingsPage';
import ChangePasswordPage from '../change-password/ChangePasswordPage';

export default observer(function UsersPage() {

  return <Routes>
    <Route path='/' element={<Navigate replace to='/workouts' />} />
    <Route path='/workouts' element={<WorkoutsPage />} />
    <Route path='/workouts/:workoutId' element={<WorkoutDetailsPage />} />
    <Route path='/profile' element={<ProfilePage />} />
    <Route path='/settings' element={<SettingsPage />} />
    <Route path='/settings/change-password' element={<ChangePasswordPage />} />
  </Routes>
})