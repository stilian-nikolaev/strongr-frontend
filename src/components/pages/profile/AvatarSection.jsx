import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { Avatar, Box, ColorInput, Stack, } from '@mantine/core'

import GenericButton from '../../common/buttons/GenericButton'
import { useAvatar } from '../../../hooks/avatar'
import { ModalStore } from '../../../stores/ModalStore'
import { ViewStore } from '../../../stores/ViewStore'
import { useState } from 'react'

export default observer(function AvatarSection({ originAvatarId, originColor }) {
    const { avatarId, setAvatarId, avatarColor, setAvatarColor } = ViewStore
    const { openModal } = ModalStore
    const [edittingColor, setEdittingColor] = useState(false);
    const src = useAvatar(avatarId || originAvatarId);

    const openEdittingColor = () => setEdittingColor(true);
    const closeEdittingColor = () => setEdittingColor(false);

    useEffect(() => {
        closeEdittingColor()
        setAvatarId(originAvatarId)
        setAvatarColor(originColor)
    }, [])

    function handleChangeAvatarClick() {
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
                <Stack sx={{ width: '12vw' }}>
                    <GenericButton onClick={handleChangeAvatarClick}>
                        Change avatar
                    </GenericButton>
                    {
                        edittingColor
                            ?
                            <ColorInput size="md" value={avatarColor} onChange={setAvatarColor} />
                            :
                            <GenericButton onClick={openEdittingColor}>
                                Change background
                            </GenericButton>
                    }
                </Stack>
            </Box>
        </Box>
    )
})