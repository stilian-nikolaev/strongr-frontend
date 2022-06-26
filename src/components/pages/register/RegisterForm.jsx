import { Box, Center, Text } from '@mantine/core';
import React from 'react'
import GenericForm from '../../common/form/GenericForm';
import TextField from '../../common/form/TextField';
import { ViewStore } from '../../../stores/ViewStore';
import { useMutation } from 'react-query';
import { useConfigureHeaders, useRegisterUser } from '../../../hooks/auth';
import { AuthStore } from '../../../stores/AuthStore';
import { useNavigate } from 'react-router-dom';
import GenericButton from '../../common/buttons/GenericButton';
import * as yup from 'yup'

export default function RegisterForm() {
    const navigate = useNavigate();
    const { login } = AuthStore


    const validationSchema = yup
        .object({
            email: yup.string().email().required(),
            name: yup.string().min(1).max(40).required(),
            password: yup.string().trim().min(1).max(40).required(),
            repeatPassword: yup.string().trim().min(1).max(40).required(),
        })

    const mutation = useMutation({
        mutationFn: data => useRegisterUser(data),
        onSuccess: (res) => {
            useConfigureHeaders(res.token);
            login(res.token, res.expiresAt)
            navigate('/workouts')
        }
    })



    function onSubmit(data) {
        mutation.mutate(data)
    }

    function onLogInClick() {
        navigate('/login')
    }

    return (
        <Center sx={{ height: '35vw', marginTop: '2vw' }}>
            <GenericForm
                validationSchema={validationSchema}
                initialValues={{ email: '', password: '', repeatPassword: '', name: '' }}
                onSubmit={onSubmit}>
                <Box sx={{ width: 320 }}>
                    <Text sx={{ fontSize: '22px', textAlign: 'center' }}>Create an account</Text>
                    <TextField
                        placeholder="Name"
                        aria-label="name"
                        name="name"
                        size="lg"
                        required
                        sx={{
                            marginTop: '20px',
                            '& ::placeholder': {
                                color: '#808080 !important'
                            }
                        }}
                    />
                    <TextField
                        placeholder="Email"
                        aria-label="email"
                        name="email"
                        size="lg"
                        required
                        sx={{
                            marginTop: '40px',
                            '& ::placeholder': {
                                color: '#808080 !important'
                            }
                        }}
                    />
                    <TextField
                        placeholder="Password"
                        aria-label="password"
                        name="password"
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
                    <TextField
                        placeholder="Confirm Password"
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
                    <Box sx={{ display: 'flex', marginTop: 40 }}>
                        <GenericButton
                            px='20px'
                            py='12px'
                            type="submit"
                            sx={{
                                fontSize: '16px',
                            }}>
                            Sign up
                        </GenericButton>
                        <Text sx={{ marginLeft: 20 }}>
                            Already have an account?
                            <Text
                                onClick={onLogInClick}
                                sx={{
                                    width: '100px',
                                    backgroundImage: 'linear-gradient(black, black)',
                                    backgroundSize: '0% 2px',
                                    backgroundRepeat: 'no-repeat',
                                    transition: 'background-size 0.2s',
                                    backgroundPosition: '50% calc(100%)',
                                    '&:hover': {
                                        backgroundSize: '100% 2px',
                                        cursor: 'pointer'
                                    }
                                }}>Log in here</Text>
                        </Text>
                    </Box>
                </Box>
            </GenericForm>
        </Center>

    )
}
