import React from 'react'
import axios from 'axios'
import { Card, Center, Text } from '@mantine/core'

export default function UsersPage() {
  axios.get('http://localhost:5000/workouts')
    .then(response => {
      response.data.forEach(console.log)
    })
    .catch(err => console.log(err))

    return <Text>Loading</Text>

  
}
