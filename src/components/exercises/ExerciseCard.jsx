import { RiMoreFill } from 'react-icons/ri';
import { Box, Card, Menu, Text, TextInput } from '@mantine/core'
import React, { forwardRef, useState } from 'react'
import AddSetForm from './AddSetForm';

export default function ExerciseCard({ exercise }) {
    const [addingSet, setAddingSet] = useState(false);

    function onAddSetClick(e) {
        setAddingSet(true);
    }

    function onEditClick(e) {

    }

    function onDeleteClick(e) {
        console.log('delete');
    }

    return (
        <Card shadow="lg" sx={{
            backgroundColor: 'pink',
            borderRadius: '10px',
            border: '2px solid grey',
            '&:hover': {
                cursor: 'default',
                '& .more': {
                    display: 'block'
                }
            }
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text sx={{ borderBottom: '1px solid black', width: '10vw', marginBottom: '5px' }}>
                    {exercise.title}
                </Text>
                <Menu
                    control={
                        <Box className="more" sx={{ height: '1vh', display: 'none', '&:hover': { cursor: 'pointer' } }} >
                            <RiMoreFill size="1.5vw" />
                        </Box >
                    }
                    size="xs"
                    gutter={-8}
                >
                    <Menu.Item onClick={onAddSetClick}>
                        Add set
                    </Menu.Item>
                    <Menu.Item onClick={onEditClick}>
                        Edit
                    </Menu.Item>
                    <Menu.Item onClick={onDeleteClick}>
                        Delete
                    </Menu.Item>
                </Menu>

            </Box>
            {exercise.sets.length != 0
                ?
                exercise.sets.map(x =>
                    <Text key={x._id}>
                        {x.amount} reps {x.weight > 0 ? `with ${x.weight} kg` : 'bodyweight'}
                    </Text>)
                :
                addingSet == false ?
                    <Text>No sets yet.</Text> : null}
            {addingSet ? <AddSetForm setAddingSet={setAddingSet} exerciseId={exercise._id} /> : null}
        </Card>
    )
}
