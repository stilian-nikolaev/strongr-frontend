import React from 'react'
import axios from 'axios'
import { ActionIcon, Button, Card, Center, Container, Image, SimpleGrid, Text } from '@mantine/core'
import { useQuery } from 'react-query'
import { MdAdd } from 'react-icons/md'



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

  console.log(data);
  return <>
    <Container sx={{display: 'flex', justifyContent: 'space-between', width: '60vw', marginTop: 20}}>
      <SimpleGrid cols={3}>
        {data.map(x =><>
        
          <Card px={20} sx={{ backgroundColor: 'pink' }} shadow="sm">
            <Text  >{x.title}</Text>
            <Text>Exercises: 8</Text>
            <Text>Sets: 16</Text>
          </Card>
          <Card px={20} sx={{ backgroundColor: 'pink' }} shadow="sm">
            <Text  >{x.title}</Text>
            <Text>Exercises: 8</Text>
            <Text>Sets: 16</Text>
          </Card>
          <Card px={20} sx={{ backgroundColor: 'pink' }} shadow="sm">
            <Text  >{x.title}</Text>
            <Text>Exercises: 8</Text>
            <Text>Sets: 16</Text>
          </Card>
          <Card px={20} sx={{ backgroundColor: 'pink' }} shadow="sm">
            <Text  >{x.title}</Text>
            <Text>Exercises: 8</Text>
            <Text>Sets: 16</Text>
          </Card>
          <Card px={20} sx={{ backgroundColor: 'pink' }} shadow="sm">
            <Text  >{x.title}</Text>
            <Text>Exercises: 8</Text>
            <Text>Sets: 16</Text>
          </Card>
          <Card px={20} sx={{ backgroundColor: 'pink' }} shadow="sm">
            <Text  >{x.title}</Text>
            <Text>Exercises: 8</Text>
            <Text>Sets: 16</Text>
          </Card>
        </>
          )}
      </SimpleGrid>
      <ActionIcon radius={50} sx={{ border: '1px solid black', backgroundColor: 'pink', '&:hover': {
        backgroundColor: '#F9BDC5'
      } }}>
        <MdAdd size={30} colo />
      </ActionIcon>
    </Container>
  </>

}
