import React from 'react'
import { ActionIcon } from '@mantine/core'
import { MdClose } from 'react-icons/md'

export default function CloseButton({onClose, size = "1.8vw"}) {
    return (
        <ActionIcon size={size} onClick={onClose} radius="50%">
            <MdClose size="6vw" />
        </ActionIcon>
    )
}
