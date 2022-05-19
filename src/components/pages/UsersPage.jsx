import React, { useState } from 'react'
import axios from 'axios'
import { ActionIcon, Button, Card, Center, Container, Image, SimpleGrid, Text } from '@mantine/core'
import { useQuery } from 'react-query'
import { MdAdd } from 'react-icons/md'
import Workout from '../workouts/Workout'
import Grid from '../workouts/Grid'

export default function UsersPage() {
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

  function onBackClick() {
    setSelectedWorkoutId(null);
  }

  function onWorkoutClick(id) {
    setSelectedWorkoutId(id);
  }

  return selectedWorkoutId
      ?
      <Workout selectedWorkoutId={selectedWorkoutId} onBackClick={onBackClick}/>
      :
      <Grid onWorkoutClick={onWorkoutClick} />
}
