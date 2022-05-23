import { Box, Menu, Text } from '@mantine/core'
import { observer } from 'mobx-react'
import React from 'react'
import { RiMoreFill } from 'react-icons/ri'
import { useMutation } from 'react-query'
import { useDeleteWorkout } from '../../hooks/workouts'
import { ViewStore } from '../../stores/ViewStore'
import { WorkoutStore } from '../../stores/WorkoutStore'
import BackButton from '../common/BackButton'
import AddExerciseButton from './AddExerciseButton'
import EditTitleForm from './EditTitleForm'

export default observer(function GridHeader({title}) {
    const { setView, editingTitle, addingExercise, toggleAddingExercise, toggleEditingTitle } = ViewStore;
    const { workoutId } = WorkoutStore;


    const deleteMutation = useMutation({
        mutationFn: () => useDeleteWorkout(workoutId),
        onError: () => console.log('error deleting workout'),
        onSuccess: (res) => {
            //open comfirmation
            setView('workouts')
        }
    })

    function onEditTitleClick() {
        toggleEditingTitle();
    }

    function onDeleteWorkoutClick() {
        deleteMutation.mutate();
    }

    function onBackClick() {
        addingExercise && toggleAddingExercise()
        setView('workouts')
    }


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1vw',
        }}>
            <Box sx={{
                paddingLeft: '1vw',
                paddingRight: editingTitle ? '1.7vw' : '4vw',
                borderBottom: '2px solid black',
                display: 'flex',
                '&:hover': {
                    paddingRight: '1.7vw',
                    '& .title-more': {
                        display: editingTitle ? 'none' : 'block'
                    }
                }
            }}>
                {editingTitle ? <EditTitleForm title={title} /> :
                    <Text sx={{ fontSize: '2.4vw' }}>
                        {title}
                    </Text>}
                <Menu
                    control={
                        <Box
                            className="title-more"
                            sx={{
                                display: 'none',
                                marginLeft: '0.8vw',
                                marginTop: '1vw',
                                height: '1vh',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }} >
                            <RiMoreFill size="1.4vw" />
                        </Box >
                    }
                    size="11vw"
                    gutter={-8}
                >
                    <Menu.Item onClick={onEditTitleClick}>
                        <Text sx={{ fontSize: '1vw' }}>Rename workout</Text>
                    </Menu.Item>
                    <Menu.Item onClick={onDeleteWorkoutClick}>
                        <Text sx={{ fontSize: '1vw' }}>Delete workout</Text>
                    </Menu.Item>
                </Menu>

            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AddExerciseButton />
                <BackButton handler={onBackClick} />
            </Box>
        </Box>
    )
})