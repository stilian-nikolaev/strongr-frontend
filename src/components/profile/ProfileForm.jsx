import { Autocomplete, Box, Text } from '@mantine/core'
import { observer } from 'mobx-react'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useEditProfile, useProfile } from '../../hooks/profile'
import { endpoints } from '../../service/apiEndpoints'
import { ViewStore } from '../../stores/ViewStore'
import GenericButton from '../common/buttons/GenericButton'
import AutoCompleteField from '../common/form/AutoComleteField'
import GenericForm from '../common/form/GenericForm'
import TextField from '../common/form/TextField'

const autocompleteData = ['Gym lover', 'Bro lifter', 'Athlete', 'Runner', 'Netflix enjoyer'];

export default observer(function ProfileForm({ name, activity }) {
    const initialValues = { name, activity }
    const { avatarId } = ViewStore
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: useEditProfile,
        onError: () => console.log('error editting profile'),
        onSuccess: (res) => {
            console.log(endpoints.profile.one().url);
            queryClient.invalidateQueries()
        }
    })


    function onSubmit(data) {
        mutation.mutate({ ...data, avatarId });
    }

    return (
        <Box sx={{ marginTop: '3vw' }}>
            <GenericForm
                initialValues={initialValues}
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
                <AutoCompleteField
                    placeholder="Activity*"
                    aria-label="activity"
                    name="activity"
                    data={autocompleteData}
                    size="lg"
                    required
                    sx={{
                        '& ::placeholder': {
                            color: '#808080 !important'
                        }
                    }}
                />
                <Box sx={{ marginTop: '2vw', display: 'flex' }}>
                    <GenericButton type="submit">Save</GenericButton>
                </Box>
            </GenericForm>
        </Box>
    )
})
