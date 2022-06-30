import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { Box, Stack, Text } from '@mantine/core'
import { showNotification } from '@mantine/notifications';

import ColorSwatches from './ColorSwatches'
import ConfirmationModal from '../../common/ConfirmationModal'
import GenericButton from '../../common/buttons/GenericButton'
import { useDeleteUser } from '../../../hooks/user'
import { AuthStore } from '../../../stores/AuthStore'
import { ModalStore } from '../../../stores/ModalStore'

export default function SettingsPage() {
    const { setContent, setCallback, openModal, closeModal } = ModalStore
    const { logout } = AuthStore
    const navigate = useNavigate();

    const deleteMutation = useMutation({
        mutationFn: useDeleteUser,
        onSuccess: () => {
            closeModal();
            showNotification({
                title: 'Success',
                message: 'Successfully deleted profile!'
            })
            logout();
            navigate('/')
        }
    })

    function handleChangePasswordClick() {
        navigate('/settings/change-password')
    }

    function handleDeleteProfileClick() {
        setContent('Are you sure you want to delete your profile and all of its data?')
        setCallback(deleteMutation.mutate)
        openModal()
    }

    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={(theme) => ({
                    borderBottom: `2px solid ${theme.colors.common[0]}`,
                    marginTop: '1vw',
                    paddingRight: '2vw',
                    paddingLeft: '1vw',
                })}>
                    <Text sx={{ fontSize: '2.4vw', }}>Settings</Text>
                </Box>
            </Box>
            <Box sx={{ width: '14vw', marginTop: '1vw' }}>
                <Text sx={{
                    marginTop: '1vw',
                    fontSize: '1.4vw',
                }}>
                    Manage your profile
                </Text>
                <Stack sx={{ width: '11vw' }}>
                    <GenericButton sx={{ marginTop: '1vw' }} onClick={handleChangePasswordClick}>
                        Change password
                    </GenericButton>
                    <GenericButton sx={{ marginTop: '0.5vw' }} onClick={handleDeleteProfileClick}>
                        Delete this account
                    </GenericButton>
                </Stack>
            </Box>
            <Box>
                <Text sx={{ marginTop: '2vw', fontSize: '1.4vw' }}>Configure theme</Text>
                <ColorSwatches />
            </Box>
            <ConfirmationModal />
        </Box>
    )
}
