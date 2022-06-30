import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { observer } from 'mobx-react'
import { Box, Text } from '@mantine/core'
import { showNotification } from '@mantine/notifications';
import * as yup from 'yup'

import GenericButton from '../../common/buttons/GenericButton'
import AutoCompleteField from '../../common/form/AutoComleteField'
import GenericForm from '../../common/form/GenericForm'
import TextField from '../../common/form/TextField'
import { ViewStore } from '../../../stores/ViewStore'
import { useEditUser } from '../../../hooks/user'
import { endpoints } from '../../../service/apiEndpoints'

const autocompleteData = ['Gym lover', 'Bro lifter', 'Athlete', 'Runner', 'Netflix enjoyer'];

const validationSchema = yup.object({
    name: yup.string().min(1).max(30).required(),
    activity: yup.string().required(),
})

export default observer(function ProfileForm({ name, activity }) {
    const initialValues = { name, activity }
    const { avatarId, avatarColor } = ViewStore
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: useEditUser,
        onSuccess: () => {
            showNotification({
                title: 'Success',
                message: 'Successfully edited profile!'
            })
            queryClient.invalidateQueries(endpoints.user.one().url)
        }
    })

    function handleSubmit(data) {
        mutation.mutate({ ...data, avatarId, avatarColor });
    }

    return (
        <Box sx={{ marginTop: '3vw' }}>
            <GenericForm
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}>
                <Text sx={(theme) => ({ fontSize: '0.8vw', marginLeft: '0.5vw', color: theme.colors.common[1] })}>Name</Text>
                <TextField
                    inlineError={false}
                    placeholder="Name"
                    aria-label="name"
                    name="name"
                    size="lg"
                    sx={(theme) => ({
                        '& ::placeholder': {
                            color: `${theme.colors.common[1]} !important`

                        }
                    })}
                />
                <Text sx={(theme) => ({ marginTop: '1vw', fontSize: '0.8vw', marginLeft: '0.5vw', color: theme.colors.common[1] })}>
                    Activity
                </Text>
                <AutoCompleteField
                    required
                    placeholder="Activity"
                    aria-label="activity"
                    name="activity"
                    data={autocompleteData}
                    size="lg"
                    sx={(theme) => ({
                        '& ::placeholder': {
                            color: `${theme.colors.common[1]} !important`

                        }
                    })}
                />
                <Box sx={{ marginTop: '2vw', display: 'flex' }}>
                    <GenericButton type="submit">Save</GenericButton>
                </Box>
            </GenericForm>
        </Box>
    )
})