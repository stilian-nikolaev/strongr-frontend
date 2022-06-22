import { Box, Text } from '@mantine/core'
import { observer } from 'mobx-react';
import React from 'react'
import AvatarModal from './AvatarModal'

import AvatarSection from './AvatarSection'
import ProfileForm from './ProfileForm'

export default function Profile() {
    return (
        <Box sx={{ width: '21vw' }}>
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
            <AvatarSection />
            <ProfileForm />
            <AvatarModal/>
        </Box>
    )
}
