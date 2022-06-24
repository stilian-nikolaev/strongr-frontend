import React from 'react'

import { ViewStore } from '../../../stores/ViewStore';
import AddButton from '../../common/buttons/AddButton';

export default function AddWorkoutButton() {
  const { toggleAddingWorkout, addingWorkout } = ViewStore;
  const label =  addingWorkout? 'Cancel': 'Add workout'; 

  function handler() {
    toggleAddingWorkout();
  }

  return (
    <AddButton handler={handler} label={label}/>
  )
}
