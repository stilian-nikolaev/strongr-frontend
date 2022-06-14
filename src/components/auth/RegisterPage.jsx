import { Box, Center, Text } from '@mantine/core';
import React from 'react'
import ModalButton from '../common/buttons/ModalButton';
import AuthFormButton from '../common/buttons/AuthFormButton';
import GenericForm from '../common/form/GenericForm';
import TextField from '../common/form/TextField';
import { ViewStore } from '../../stores/ViewStore';

export default function RegisterPage() {
    const { setView } = ViewStore

    function onLogInClick() {
        setView('login')
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
            <GenericForm>
                <Box sx={{ width: 320 }}>
                    <Text sx={{ fontSize: '22px', textAlign: 'center' }}>Create an account</Text>
                    <TextField
                        placeholder="Name*"
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
                        placeholder="Email*"
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
                    <TextField
                        placeholder="Confirm Password*"
                        aria-label="confirmPassword"
                        name="rePassword"
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
                    <Box sx={{ display: 'flex', marginTop: 30 }}>
                        <AuthFormButton
                            type="submit"
                            sx={{}}>
                            Sign up
                        </AuthFormButton>
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
        </Box>
    )
}