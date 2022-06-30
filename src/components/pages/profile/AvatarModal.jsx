import React from 'react'
import { observer } from 'mobx-react';
import { Avatar, Center, Modal, SimpleGrid, Text } from '@mantine/core';

import { useAvatars } from '../../../hooks/avatar';
import { ModalStore } from '../../../stores/ModalStore';
import { ViewStore } from '../../../stores/ViewStore';

export default observer(function AvatarModal() {
    const avatars = useAvatars();
    const { open, closeModal } = ModalStore;
    const { setAvatarId } = ViewStore;

    function handleAvatarClick(avatarId) {
        setAvatarId(avatarId);
        closeModal()
    }

    return (
        <Modal withCloseButton={false} centered opened={open} radius={20} onClose={closeModal} size="30vw">
            <Text sx={{ fontSize: '1.5vw', textAlign: 'center' }}>Pick your avatar</Text>
            <Center sx={{ marginTop: '1vw' }} >
                <SimpleGrid cols={4} spacing="xl" sx={{ width: '25vw' }}>
                    {avatars.map((src, i) => <Avatar
                        onClick={() => handleAvatarClick(i + 1)}
                        key={src}
                        src={src}
                        size="5vw"
                        radius="50%"
                        sx={{
                            '&:hover': {
                                cursor: 'pointer'
                            },
                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
                        }} />)}
                </SimpleGrid>
            </Center>
        </Modal>
    )
})