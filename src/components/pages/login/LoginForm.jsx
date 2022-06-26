import { Box, Center, Text } from '@mantine/core';
import React from 'react'
import GenericForm from '../../common/form/GenericForm';
import TextField from '../../common/form/TextField';
import { useConfigureHeaders, useLoginUser } from '../../../hooks/auth';
import { useMutation } from 'react-query';
import { AuthStore } from '../../../stores/AuthStore';
import { useNavigate } from 'react-router-dom';
import GenericButton from '../../common/buttons/GenericButton';
import * as yup from 'yup'

export default function LoginForm() {
    const { login } = AuthStore
    const navigate = useNavigate();

    const validationSchema = yup
        .object({
            email: yup.string().email().required(),
            password: yup.string().trim().min(1).max(40).required(),
        })


    const mutation = useMutation({
        mutationFn: data => useLoginUser(data),
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
        <Center sx={{ height: '35vw', marginTop: '2vw' }}>
            <GenericForm validationSchema={validationSchema} initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
                <Box sx={{ width: 320 }}>
                    <Text sx={{ fontSize: '22px', textAlign: 'center' }}>Log in to Strongr</Text>
                    <TextField
                        placeholder="Email"
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
                    <Box sx={{ display: 'flex', marginTop: 40 }}>
                        <GenericButton
                            px='20px'
                            py='12px'
                            type="submit"
                            sx={{
                                fontSize: '16px',
                            }}>
                            Log in
                        </GenericButton>
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
        </Center >
    )
}
