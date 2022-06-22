import { Avatar, Box, Stack, Text } from '@mantine/core'
import React from 'react'
import GenericButton from '../common/buttons/GenericButton'
import avatar from '../../assets/avatar1.png'
import { ModalStore } from '../../stores/ModalStore'
import { ViewStore } from '../../stores/ViewStore'
import { useAvatar } from '../../hooks/avatar'
import { observer } from 'mobx-react'
import { useProfile } from '../../hooks/profile'
import { useEffect } from 'react'

export default observer(function AvatarSection() {
    const { data } = useProfile();
    const { openModal } = ModalStore
    const { avatarId, setAvatarId } = ViewStore
    const src = useAvatar(avatarId || data?.avatarId);

    useEffect(() => {
        setAvatarId(data?.avatarId)
    }, [])

    function onChangeAvatarClick() {
        openModal()
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2vw', }}>
            <Avatar
                src={src}
                size="10vw"
                radius="50%"
                alt="Username"
                sx={{
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
                }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Stack>
                    <GenericButton onClick={onChangeAvatarClick}>
                        Change avatar
                    </GenericButton>
                    <GenericButton>
                        Upload photo
                    </GenericButton>
                </Stack>
            </Box>
        </Box>
    )
})