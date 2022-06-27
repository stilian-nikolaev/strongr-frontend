import { Box, Center, Text } from '@mantine/core'
import React from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useChangePassword } from '../../../hooks/auth'
import GenericButton from '../../common/buttons/GenericButton'
import GenericForm from '../../common/form/GenericForm'
import TextField from '../../common/form/TextField'
import { showNotification } from '@mantine/notifications';
import * as yup from 'yup'

export default function ChangePasswordForm() {
    const navigate = useNavigate();

    const validationSchema = yup
        .object({
            password: yup.string().trim().min(1).max(40).required(),
            repeatPassword: yup.string().trim().min(1).max(40).required(),
        })

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
            <GenericForm validationSchema={validationSchema} initialValues={{ password: '', repeatPassword: '' }} onSubmit={onSubmit}>
                <Text sx={{ fontSize: '22px', marginLeft: 20 }}>Change password</Text>
                <TextField
                    placeholder="New Password"
                    aria-label="newPassword"
                    name="password"
                    size="lg"
                    type="password"
                    required
                    sx={(theme) => ({
                        marginTop: '20px',
                        '& ::placeholder': {
                            color: `${theme.colors.brand[2]} !important`

                        }
                    })}
                />
                <TextField
                    placeholder="Confirm Password"
                    aria-label="confirmPassword"
                    name="repeatPassword"
                    size="lg"
                    type="password"
                    required
                    sx={(theme) => ({

                        marginTop: '40px',
                        '& ::placeholder': {
                            color: `${theme.colors.brand[2]} !important`

                        }
                    })}
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
