import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Box, Text } from '@mantine/core';
import * as yup from 'yup'

import GenericForm from '../../common/form/GenericForm';
import TextField from '../../common/form/TextField';
import GenericButton from '../../common/buttons/GenericButton';
import { useConfigureHeaders, useRegisterUser } from '../../../hooks/auth';
import { AuthStore } from '../../../stores/AuthStore';

const validationSchema = yup
    .object({
        email: yup.string().email().required(),
        name: yup.string().min(1).max(40).required(),
        password: yup.string().trim().min(1).max(40).required(),
        repeatPassword: yup.string().trim().min(1).max(40).required(),
    })

const initialValues = {
    email: '',
    password: '',
    repeatPassword: '',
    name: ''
}

export default function RegisterPage() {
    const navigate = useNavigate();
    const { login } = AuthStore

    const mutation = useMutation({
        mutationFn: data => useRegisterUser(data),
        onSuccess: (res) => {
            useConfigureHeaders(res.token);
            login(res.token, res.expiresAt)
            navigate('/workouts')
        }
    })

    function handleSubmit(data) {
        mutation.mutate(data)
    }

    function onLogInClick() {
        navigate('/login')
    }

    return (
        <Box sx={{ marginTop: '5vw', display: 'flex', placeContent: 'center' }}>
            <GenericForm
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}>
                <Box sx={{ width: 320 }}>
                    <Text sx={{ fontSize: '22px', textAlign: 'center' }}>Create an account</Text>
                    <TextField
                        placeholder="Name"
                        aria-label="name"
                        name="name"
                        size="lg"
                        required
                        sx={(theme) => ({
                            marginTop: '20px',
                            '& ::placeholder': {
                                color: `${theme.colors.common[1]} !important`

                            }
                        })}
                    />
                    <TextField
                        placeholder="Email"
                        aria-label="email"
                        name="email"
                        size="lg"
                        required
                        sx={(theme) => ({
                            marginTop: '40px',
                            '& ::placeholder': {
                                color: `${theme.colors.common[1]} !important`


                            }
                        })}
                    />
                    <TextField
                        placeholder="Password"
                        aria-label="password"
                        name="password"
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
                    <Box sx={{ display: 'flex', marginTop: 40 }}>
                        <GenericButton
                            px='20px'
                            py='12px'
                            type="submit"
                            sx={{
                                color: 'white',
                                fontSize: '16px',
                            }}>
                            Sign up
                        </GenericButton>
                        <Text sx={{ marginLeft: 20 }}>
                            Already have an account?
                            <Text
                                onClick={onLogInClick}
                                sx={(theme) => ({
                                    backgroundImage: `linear-gradient(${theme.colors.common[0]}, ${theme.colors.common[0]})`,
                                    width: '100px',
                                    backgroundSize: '0% 2px',
                                    backgroundRepeat: 'no-repeat',
                                    transition: 'background-size 0.2s',
                                    backgroundPosition: '50% calc(100%)',
                                    '&:hover': {
                                        backgroundSize: '100% 2px',
                                        cursor: 'pointer'
                                    }
                                })}>Log in here</Text>
                        </Text>
                    </Box>
                </Box>
            </GenericForm>
        </Box>

    )
}
