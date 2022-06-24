import { Box, Center, Text } from '@mantine/core'
import React from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useChangePassword } from '../../../hooks/auth'
import GenericButton from '../../common/buttons/GenericButton'
import GenericForm from '../../common/form/GenericForm'
import TextField from '../../common/form/TextField'
import { showNotification } from '@mantine/notifications';

export default function ChangePasswordForm() {
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: data => useChangePassword(data),
        onSuccess: (res) => {
            navigate('/settings')
            showNotification({
                title: 'Success',
                message: 'Successfully changed password!'
            })
        }
    })

    function onSubmit(data) {
        mutation.mutate(data)
    }

    return (
        <Center sx={{ height: '89vh' }}>
            <GenericForm initialValues={{ password: '', repeatPassword: '' }} onSubmit={onSubmit}>
                <Text sx={{ fontSize: '22px', marginLeft: 20 }}>Change password</Text>
                <TextField
                    placeholder="New Password*"
                    aria-label="newPassword"
                    name="password"
                    size="lg"
                    type="password"
                    required
                    sx={{
                        marginTop: '20px',
                        '& ::placeholder': {
                            color: '#808080 !important'
                        }
                    }}
                />
                <TextField
                    placeholder="Confirm Password*"
                    aria-label="confirmPassword"
                    name="repeatPassword"
                    size="lg"
                    type="password"
                    required
                    sx={{
                        marginTop: '40px',
                        '& ::placeholder': {
                            color: '#808080 !important'
                        }
                    }}
                />
                <GenericButton
                    px='20px'
                    py='12px'
                    type="submit"
                    sx={{
                        fontSize: '16px',
                        marginTop: 30
                    }}>
                    Submit
                </GenericButton>

            </GenericForm>
        </Center>
    )
}
