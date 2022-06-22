import { Box, Button, Center, Modal, Text, UnstyledButton } from '@mantine/core'
import { observer } from 'mobx-react';
import React from 'react'
import { ModalStore } from '../../stores/ModalStore'
import GenericButton from './buttons/GenericButton';

export default observer(function ConfirmationModal() {
const {open, content, callback, closeModal} = ModalStore;


  return (
    <Modal withCloseButton={false} centered opened={open} radius={20} onClose={closeModal}>
      <Text sx={{ fontSize: '1.5vw', textAlign: 'center' }}>{content}</Text>
        <Center>
          <Box sx={{marginTop: '2vw', width: '60%', display: 'flex', justifyContent: 'space-between'}}>
          <GenericButton onClick={callback}>Delete</GenericButton>
          <GenericButton onClick={closeModal}>Cancel</GenericButton>
          </Box>
        </Center>
    </Modal>
  )
})
