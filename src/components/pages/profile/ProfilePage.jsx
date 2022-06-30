import React from 'react'
import { Box, Text } from '@mantine/core'

import AvatarModal from './AvatarModal'
import ProfileForm from './ProfileForm'
import AvatarSection from './AvatarSection'
import { useUser } from '../../../hooks/user'
import ErrorScreen from '../../common/ErrorScreen'
import LoadingScreen from '../../common/LoadingScreen'

export default function ProfilePage() {
    const { data, status } = useUser();

    if (status === 'loading') {
        return <LoadingScreen />
    }

    if (status === 'error') {
        return <ErrorScreen />
    }

    return (
        <Box sx={{ width: '25vw' }}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={(theme) => ({
                    borderBottom: `2px solid ${theme.colors.common[0]}`,
                    marginTop: '1vw',
                    paddingRight: '2vw',
                    paddingLeft: '1vw',
                })}>
                    <Text sx={{ fontSize: '2.4vw', }}>Your Profile</Text>
                </Box>
            </Box>
            <AvatarSection originAvatarId={data.avatarId} originColor={data.avatarColor} />
            <ProfileForm name={data.name} activity={data.activity} />
            <AvatarModal/>
        </Box>
    )
}
