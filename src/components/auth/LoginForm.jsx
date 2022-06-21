import { Box, Center, Text } from '@mantine/core';
import React from 'react'
import AuthFormButton from '../common/buttons/AuthFormButton';
import GenericForm from '../common/form/GenericForm';
import TextField from '../common/form/TextField';
import { useConfigureHeaders, useLoginUser } from '../../hooks/auth';
import { useMutation } from 'react-query';
import { AuthStore } from '../../stores/AuthStore';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const { login } = AuthStore
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: data => useLoginUser(data),
        onError: () => console.log('error logging in'),
        onSuccess: (res) => {
            useConfigureHeaders(res.token);
            login(res.token, res.expiresAt)
            navigate('/workouts')
        }
    })

    function onSubmit(data) {
        mutation.mutate(data)
    }


    function onSignUpClick() {
        navigate('/register')
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <GenericForm initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
                <Box sx={{ width: 320 }}>
                    <Text sx={{ fontSize: '22px', textAlign: 'center' }}>Log in to Strongr</Text>
                    <TextField
                        placeholder="Email*"
                        aria-label="email"
                        name="email"
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
                        placeholder="Password*"
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
                    <Box sx={{ display: 'flex', marginTop: 40 }}>
                        <AuthFormButton
                            type="submit"
                            sx={{}}>
                            Log in
                        </AuthFormButton>
                        <Text sx={{ marginLeft: 20 }}>
                            Don't have an account?
                            <Text
                                onClick={onSignUpClick}
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
                                }}>
                                Sign up here
                            </Text>
                        </Text>
                    </Box>
                </Box>
            </GenericForm>
        </Box>
    )
}
