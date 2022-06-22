import { Avatar, Box, Center, Modal, SimpleGrid, Text } from '@mantine/core';
import { observer } from 'mobx-react';
import React from 'react'
import { useAvatars } from '../../hooks/avatar';
import { ModalStore } from '../../stores/ModalStore';

export default observer(function AvatarModal() {
    const { open, closeModal } = ModalStore;
    const avatars = useAvatars();

    function onAvatarClick(avatarId) {
        console.log(avatarId);
    }

    return (
        <Modal withCloseButton={false} centered opened={open} radius={20} onClose={closeModal}>
            <Text sx={{ fontSize: '1.5vw', textAlign: 'center' }}>Pick your avatar</Text>
            <Center sx={{marginTop: '1vw'}}>
                <SimpleGrid cols={4}>
                    {avatars.map((src, i) => <Avatar
                        onClick={() => onAvatarClick(i + 1)}
                        key={src}
                        src={src}
                        size="4vw"
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
