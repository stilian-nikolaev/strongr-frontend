import { ColorSwatch, Group, useMantineTheme } from '@mantine/core';
import React, { useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useEditUser } from '../../../hooks/user';
import { endpoints } from '../../../service/apiEndpoints';

export default function ColorSwatches() {
    const theme = useMantineTheme();
    const [selectedColor, setSelectedColor] = useState(0)
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: useEditUser,
        onSuccess: (res) => {
            queryClient.invalidateQueries(endpoints.user.one().url)
            navigate('/settings')
        }
    })

    return (
        <Group spacing="md" sx={{
            marginTop: '1vw',

        }}>
            {Object.keys(theme.colors.choice).map((color) => (
                <ColorSwatch
                    onClick={() => {
                        setSelectedColor(color)
                        theme.colors.main[0] = theme.colors.choice[color]
                        mutation.mutate({ themeColor: Number(color) });
                    }}
                    sx={{
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}
                    size={'2vw'}
                    radius="50%"
                    key={color}
                    color={theme.colors.choice[color]}>
                    {selectedColor == color && <BiCheck size={'1vw'} color={theme.colors.common[3]} />}
                </ColorSwatch>
            ))}
        </Group>
    )
}
