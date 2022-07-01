import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation } from 'react-query'
import { observer } from 'mobx-react'
import { Box, Menu, Text } from '@mantine/core'
import { showNotification } from '@mantine/notifications';
import { RiMoreFill } from 'react-icons/ri'

import AddExerciseButton from './AddExerciseButton'
import WorkoutTitleForm from '../../workouts/WorkoutTitleForm'
import BackButton from '../../../common/buttons/BackButton'
import { useDeleteWorkout } from '../../../../hooks/workouts'
import { ModalStore } from '../../../../stores/ModalStore'
import { ViewStore } from '../../../../stores/ViewStore'

export default observer(function GridHeader({ title }) {
    const { editingTitle, addingExercise, toggleAddingExercise, toggleEditingTitle } = ViewStore;
    const { openModal, closeModal, setContent, setCallback } = ModalStore;
    const { workoutId } = useParams();
    const navigate = useNavigate();

    const deleteMutation = useMutation({
        mutationFn: () => useDeleteWorkout(workoutId),
        onSuccess: () => {
            closeModal();
            showNotification({
                title: 'Success',
                message: 'Successfully deleted workout!'
            })
            navigate('/workouts')
        }
    })

    function handleEditTitleClick() {
        toggleEditingTitle();
    }

    function handleDeleteWorkoutClick() {
        setContent('Are you sure you want to delete this workout?')
        setCallback(deleteMutation.mutate)
        openModal();
    }

    function handleBackButtonClick() {
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
                {
                    editingTitle ?
                        <WorkoutTitleForm title={title} />
                        :
                        <Text sx={{ fontSize: '2.4vw' }}>
                            {title}
                        </Text>
                }
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
                    <Menu.Item onClick={handleEditTitleClick}>
                        <Text sx={{ fontSize: '1vw' }}>Rename workout</Text>
                    </Menu.Item>
                    <Menu.Item onClick={handleDeleteWorkoutClick}>
                        <Text sx={{ fontSize: '1vw' }}>Delete workout</Text>
                    </Menu.Item>
                </Menu>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AddExerciseButton />
                <BackButton handler={handleBackButtonClick} />
            </Box>
        </Box>
    )
})