import { Avatar, Box, Stack, Text } from '@mantine/core'
import React from 'react'
import GenericButton from '../common/buttons/GenericButton'
import avatar from '../../images/avatar.jpg'

export default function AvatarSection() {
    return (
        <Box sx={{ display: 'flex', marginTop: '2vw', }}>
            <Avatar
                src={avatar}
                size="10vw"
                radius="50%"
                alt="Username"
                sx={{
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
                }} />
            <Box sx={{ marginLeft: '2vw', display: 'flex', alignItems: 'center' }}>
                <Stack>
                    <GenericButton>
                        Change avatar
                    </GenericButton>
                    <GenericButton>
                        Upload photo
                    </GenericButton>
                </Stack>
            </Box>
        </Box>
    )
}
