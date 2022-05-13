import React from 'react'
import axios from 'axios'
import { Card, Center, SimpleGrid, Text } from '@mantine/core'
import { useQuery } from 'react-query'

async function fetchWorkouts() {
  const res = await axios.get('http://localhost:5000/workouts');
  return res.data;
}

export default function UsersPage() {
  const { data, status } = useQuery('workouts', fetchWorkouts);

  if (status === 'loading') {
    return <p>Loading...</p>
  }


  if (status === 'error') {
    return <p>Error :(</p>
  }


  return <Center style={{ height: '82vh' }}>
    <SimpleGrid cols={3}>
      {data.map(x =>
        <Card px={20} sx={{ backgroundColor: 'pink'}} shadow="sm">
          <Text  >{x.title}</Text>
          <Text>Exercises: 8</Text>
          <Text>Sets: 16</Text>
        </Card>)}
    </SimpleGrid>
    {/* <ul>
      {data.map(x => <li key={x._id}>{x.title}</li>)}
    </ul> */}
  </Center>
}
