import { Box, Text } from '@mantine/core'
import React from 'react'
import { useProfile } from '../../hooks/profile'
import ErrorScreen from '../common/ErrorScreen'
import LoadingScreen from '../common/LoadingScreen'
import AvatarModal from './AvatarModal'

import AvatarSection from './AvatarSection'
import ProfileForm from './ProfileForm'

export default function Profile() {
    const { data, status } = useProfile();

    if (status === 'loading') {
        return <LoadingScreen />
    }

    if (status === 'error') {
        return <ErrorScreen />
    }

    return (
        <Box sx={{ width: '25vw' }}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{
                    marginTop: '1vw',
                    paddingRight: '2vw',
                    paddingLeft: '1vw',
                    borderBottom: '2px solid black',
                }}>
                    <Text sx={{ fontSize: '2.4vw', }}>Your Profile</Text>
                </Box>
            </Box>
            <AvatarSection originAvatarId={data.avatarId} originColor={data.avatarColor} />
            <ProfileForm name={data.name} activity={data.activity} />
            <AvatarModal/>
        </Box>
    )
}
