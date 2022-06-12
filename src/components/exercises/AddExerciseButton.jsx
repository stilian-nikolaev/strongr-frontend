import React from 'react'

import { ViewStore } from '../../stores/ViewStore';
import AddButton from '../common/buttons/AddButton';

export default function AddExerciseButton() {
  const { toggleAddingExercise, addingExercise } = ViewStore;
  const label =  addingExercise? 'Cancel': 'Add exercise'; 

  function handler() {
    toggleAddingExercise();
  }

  return (
    <AddButton handler={handler} label={label}/>
  )
}
