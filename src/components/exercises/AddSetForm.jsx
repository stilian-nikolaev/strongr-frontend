import { Box, Modal, Text } from '@mantine/core'
import React from 'react'
import GenericForm from '../common/form/GenericForm'
import Select from '../common/form/Select'
import TextField from '../common/form/TextField'

export default function AddSetForm() {
    return (
        <GenericForm initialValues={{ amount: 10, unit: 'reps', weight: 20 }}>
        <Box sx={{ display: 'flex' }}>
            <TextField
                variant="unstyled"
                size="md"
                aria-label="amount"
                name="amount"
                type="number"
                min={0}
                max={99}
                sx={{ width: '1.6vw',  borderBottom: '1px solid black', height: '5.2vh'  }}
            />
            <Select
                variant="unstyled"
                rightSection={<></>}
                rightSectionWidth="0"
                size="md"
                ml={4}
                aria-label="unit"
                sx={{ width: '2.6vw',  borderBottom: '1px solid black', height: '5.2vh'  }}
                name="unit"
                data={['reps', 'sec', 'min']}
            />
            <Text ml={4} sx={{ alignSelf: 'center', marginTop: '1.4vh' }}>with</Text>
            <TextField
                variant="unstyled"
                size="md"
                aria-label="weight"
                ml={4} name="weight"
                type="number"
                min={0}
                max={999}
                sx={{ width: '2.4vw', borderBottom: '1px solid black', height: '5.2vh' }} />
            <Text sx={{ alignSelf: 'center', marginTop: '1.4vh'}}>kg</Text>
        </Box>
    </GenericForm>
    )
}
