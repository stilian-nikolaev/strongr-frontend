import { Avatar, Box, ColorPicker, Stack, Text } from '@mantine/core'
import React from 'react'
import GenericButton from '../common/buttons/GenericButton'
import { ModalStore } from '../../stores/ModalStore'
import { ViewStore } from '../../stores/ViewStore'
import { useAvatar } from '../../hooks/avatar'
import { observer } from 'mobx-react'
import { useEffect } from 'react'

export default observer(function AvatarSection({ originAvatarId, originColor }) {
    const { openModal } = ModalStore
    const { avatarId, setAvatarId, avatarColor, setAvatarColor, openEdittingColor, closeEdittingColor, edittingColor } = ViewStore
    const src = useAvatar(avatarId || originAvatarId);

    useEffect(() => {
        closeEdittingColor()
        setAvatarId(originAvatarId)
        setAvatarColor(originColor)
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
                    backgroundColor: avatarColor,
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
                }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Stack>
                    <GenericButton onClick={onChangeAvatarClick}>
                        Change avatar
                    </GenericButton>
                    {edittingColor
                        ?
                        <ColorPicker value={avatarColor} onChange={setAvatarColor} />
                        :
                        <GenericButton onClick={openEdittingColor}>
                            Change background
                        </GenericButton>}

                </Stack>
            </Box>
        </Box>
    )
})