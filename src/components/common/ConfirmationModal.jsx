import React from 'react'
import { observer } from 'mobx-react';
import { Box, Center, Modal, Text } from '@mantine/core'

import GenericButton from './buttons/GenericButton';
import { ModalStore } from '../../stores/ModalStore'

export default observer(function ConfirmationModal() {
  const { open, content, callback, closeModal } = ModalStore;

  return (
    <Modal opened={open} onClose={closeModal} withCloseButton={false} centeredradius={20}>
      <Text sx={{ fontSize: '1.5vw', textAlign: 'center' }}>{content}</Text>
      <Center>
        <Box sx={{ marginTop: '2vw', width: '60%', display: 'flex', justifyContent: 'space-between' }}>
          <GenericButton onClick={callback}>Delete</GenericButton>
          <GenericButton onClick={closeModal}>Cancel</GenericButton>
        </Box>
      </Center>
    </Modal>
  )
})