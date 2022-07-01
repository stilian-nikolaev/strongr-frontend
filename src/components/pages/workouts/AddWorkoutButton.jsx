import React from 'react'

import AddButton from '../../common/buttons/AddButton';
import { ViewStore } from '../../../stores/ViewStore';

export default function AddWorkoutButton() {
  const { toggleAddingWorkout, addingWorkout } = ViewStore;
  const label =  addingWorkout? 'Cancel': 'Add workout'; 

  function handleClick() {
    toggleAddingWorkout();
  }

  return (
    <AddButton handler={handleClick} label={label}/>
  )
}
