import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthStore } from '../stores/AuthStore'

import WorkoutsPage from './pages/workouts/WorkoutsPage';
import WorkoutDetailsPage from './pages/workout-details/WorkoutDetailsPage';
import ProfilePage from './pages/profile/ProfilePage';
import SettingsPage from './pages/settings/SettingsPage';
import ChangePasswordPage from './pages/change-password/ChangePasswordPage';

import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'

export default function Router() {
    const { isAuthenticated } = AuthStore

    return (isAuthenticated ?
        <Routes>
            <Route path='/' element={<Navigate replace to='/workouts' />} />
            <Route path='/workouts' element={<WorkoutsPage />} />
            <Route path='/workouts/:workoutId' element={<WorkoutDetailsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path='/settings/change-password' element={<ChangePasswordPage />} />
            <Route path="/*" element={<Navigate replace to='/workouts' />}/>
        </Routes>
        :
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path="/*" element={<Navigate replace to='/' />}/>
        </Routes>
    )
}
