import React from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Center, Text } from '@mantine/core'
import { showNotification } from '@mantine/notifications';
import * as yup from 'yup'

import GenericButton from '../../common/buttons/GenericButton'
import GenericForm from '../../common/form/GenericForm'
import TextField from '../../common/form/TextField'
import { useChangePassword } from '../../../hooks/auth'

const validationSchema = yup
    .object({
        password: yup.string().trim().min(1).max(40).required(),
        repeatPassword: yup.string().trim().min(1).max(40).required(),
    })

export default function ChangePasswordPage() {
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: data => useChangePassword(data),
        onSuccess: () => {
            navigate('/settings')
            showNotification({
                title: 'Success',
                message: 'Successfully changed password!'
            })
        }
    })

    function handleSubmit(data) {
        mutation.mutate(data)
    }

    return (
        <Center sx={{ height: '89vh' }}>
            <GenericForm validationSchema={validationSchema} initialValues={{ password: '', repeatPassword: '' }} onSubmit={handleSubmit}>
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
                            color: `${theme.colors.common[1]} !important`

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
                            color: `${theme.colors.common[1]} !important`

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