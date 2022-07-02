import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { ColorSwatch, Group, SimpleGrid, useMantineTheme } from '@mantine/core';
import { BiCheck } from 'react-icons/bi'

import { useEditUser } from '../../../hooks/user';
import { endpoints } from '../../../service/apiEndpoints';
import { ViewStore } from '../../../stores/ViewStore';

export default function ColorSwatches() {
    const { themeColor, setThemeColor } = ViewStore
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const theme = useMantineTheme();

    const mutation = useMutation({
        mutationFn: useEditUser,
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.user.one().url)
                .then(() => navigate('/settings'))
        }
    })

    function handleColorSwatchClick(color) {
        setThemeColor(color)
        theme.colors.main[0] = theme.colors.choice[color]
        mutation.mutate({ themeColor: Number(color) });
    }

    return (
        <Group spacing="md" sx={{ marginTop: '1vw' }}>
            <SimpleGrid cols={4} spacing="xl">
                {Object.keys(theme.colors.choice).map((color) => (
                    <ColorSwatch
                        onClick={() => handleColorSwatchClick(color)}
                        sx={{
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}
                        size={'2vw'}
                        radius="50%"
                        key={color}
                        color={theme.colors.choice[color]}>
                        {themeColor == color && <BiCheck size={'1vw'} color={theme.colors.common[0]} />}
                    </ColorSwatch>
                ))}
            </SimpleGrid>
        </Group>
    )
}