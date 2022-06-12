import React from 'react'
import { ViewStore } from '../../stores/ViewStore';
import AddButton from '../common/buttons/AddButton';

export default function AddWorkoutButton() {
    const {setView} = ViewStore;

    function handler() {
        setView('workout-form')
    }

    return (
        <AddButton handler={handler} label={'Add exercise'} />
    )
}
