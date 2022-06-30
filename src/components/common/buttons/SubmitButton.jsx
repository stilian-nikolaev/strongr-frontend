import React from 'react'
import { UnstyledButton } from '@mantine/core'
import { MdDone } from 'react-icons/md'

export default function SubmitButton({ sx, size = '1vw' }) {
    return (
        <UnstyledButton
            type="submit"
            sx={{
                height: 1,
                ...sx,
                '&:hover': {
                    cursor: 'pointer'
                }
            }}>
            <MdDone size={size} type="submit" />
        </UnstyledButton>
    )
}