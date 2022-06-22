import { Box, Text } from '@mantine/core'
import React from 'react'
import GenericButton from '../common/buttons/GenericButton'
import GenericForm from '../common/form/GenericForm'
import TextField from '../common/form/TextField'

export default function ProfileForm() {
    function onSubmit(data) {
        console.log(data);
    }

    return (
        <Box sx={{ marginTop: '3vw' }}>
            <GenericForm
                initialValues={{
                    name: 'Stilian Nikolaev',
                    activity: 'Gym lover'
                }}
                onSubmit={onSubmit}>
                <Text sx={{ fontSize: '0.8vw', marginLeft: '0.5vw', color: 'gray' }}>Name</Text>
                <TextField
                    placeholder="Name*"
                    aria-label="name"
                    name="name"
                    size="lg"
                    required
                    sx={{
                        '& ::placeholder': {
                            color: '#808080 !important'
                        }
                    }}
                />
                <Text sx={{ marginTop: '1vw', fontSize: '0.8vw', marginLeft: '0.5vw', color: 'gray' }}>Activity</Text>
                <TextField
                    placeholder="Activity*"
                    aria-label="activity"
                    name="activity"
                    size="lg"
                    required
                    sx={{
                        '& ::placeholder': {
                            color: '#808080 !important'
                        }
                    }}
                />
                <Box sx={{ marginTop: '2vw', display: 'flex' }}>
                    <GenericButton sx={{fontSize: '1vw'}} type="submit">Save</GenericButton>
                </Box>
            </GenericForm>
        </Box>
    )
}
