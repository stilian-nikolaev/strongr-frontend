import { Box, Stack, Text } from '@mantine/core'
import React from 'react'
import GenericButton from '../common/buttons/GenericButton'

export default function Settings() {
    function onChangePassClick() {
        
    }

    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{
                    marginTop: '1vw',
                    paddingRight: '2vw',
                    paddingLeft: '1vw',
                    borderBottom: '2px solid black',
                }}>
                    <Text sx={{ fontSize: '2.4vw', }}>Settings</Text>
                </Box>
            </Box>
            <Stack sx={{width: '12vw', marginTop: '2vw'}}>
                <GenericButton onClick={onChangePassClick}>
                    Change password
                </GenericButton>
                <GenericButton>
                    Delete this account
                </GenericButton>
            </Stack>
        </Box>
    )
}
