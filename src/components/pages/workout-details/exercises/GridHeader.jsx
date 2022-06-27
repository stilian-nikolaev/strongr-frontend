import React from 'react'
import { useMutation } from 'react-query'
import { observer } from 'mobx-react'
import { Box, Menu, Text } from '@mantine/core'
import { RiMoreFill } from 'react-icons/ri'

import { useDeleteWorkout } from '../../../../hooks/workouts'
import { ModalStore } from '../../../../stores/ModalStore'
import { ViewStore } from '../../../../stores/ViewStore'
import BackButton from '../../../common/buttons/BackButton'
import AddExerciseButton from './AddExerciseButton'
import WorkoutTitleForm from '../../workouts/WorkoutTitleForm'
import { useNavigate, useParams } from 'react-router-dom'
import { showNotification } from '@mantine/notifications';

export default observer(function GridHeader({ title }) {
    const { editingTitle, addingExercise, toggleAddingExercise, toggleEditingTitle } = ViewStore;
    const { workoutId } = useParams();
    const navigate = useNavigate();
    const { openModal, closeModal, setContent, setCallback } = ModalStore;

    const deleteMutation = useMutation({
        mutationFn: () => useDeleteWorkout(workoutId),
        onSuccess: (res) => {
            closeModal();
            showNotification({
                title: 'Success',
                message: 'Successfully deleted workout!'
            })
            navigate('/workouts')
        }
    })

    function onEditTitleClick() {
        toggleEditingTitle();
    }

    function onDeleteWorkoutClick() {
        setContent('Are you sure you want to delete this workout?')
        setCallback(deleteMutation.mutate)
        openModal();
    }

    function onBackClick() {
        addingExercise && toggleAddingExercise()
        navigate('/workouts')
    }


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1vw',
        }}>
            <Box sx={(theme) => ({
                borderBottom: `2px solid ${theme.colors.common[0]}`,
                paddingLeft: '1vw',
                paddingRight: editingTitle ? '1.7vw' : '4vw',
                display: 'flex',
                '&:hover': {
                    paddingRight: '1.7vw',
                    '& .title-more': {
                        display: editingTitle ? 'none' : 'block'
                    }
                }
            })}>
                {editingTitle ? <WorkoutTitleForm title={title} /> :
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