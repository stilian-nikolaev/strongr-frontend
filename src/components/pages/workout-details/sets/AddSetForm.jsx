import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Box, Text } from '@mantine/core'

import GenericForm from '../../../common/form/GenericForm'
import Select from '../../../common/form/Select'
import TextField from '../../../common/form/TextField'
import { useCreateSet, useEditSet } from '../../../../hooks/sets'
import { endpoints } from '../../../../service/apiEndpoints'
import { useFocusTrap } from '@mantine/hooks'
import SubmitButton from '../../../common/buttons/SubmitButton'
import { useParams } from 'react-router-dom'

export default function AddSetForm({ exerciseId, onSuccess, initialValues }) {
    const { workoutId } = useParams();
    const queryClient = useQueryClient()
    const focusTrapRef = useFocusTrap();

    const mutationFn = initialValues ?
        data => useEditSet(workoutId, exerciseId, initialValues._id, data)
        :
        data => useCreateSet(workoutId, exerciseId, data);

    const mutation = useMutation({
        mutationFn,
        onSuccess: (res) => {
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId))
            onSuccess();
        }
    })

    function onSubmit(data) {
        console.log(data);
        mutation.mutate(data)
    }

    return (
        <GenericForm
            onSubmit={onSubmit}
            initialValues={initialValues || { amount: 10, unit: 'reps', weight: 100 }}
        >
            <Box ref={focusTrapRef} sx={{ display: 'flex', alignItems: 'stretch', marginLeft: window.innerWidth < 1600 ? -3 : 0 }}>
                <TextField
                    data-autofocus
                    variant="unstyled"
                    size="1.2vw"
                    aria-label="amount"
                    name="amount"
                    type="number"
                    min={1}
                    max={99}
                    sx={{
                        width: '1.6vw',
                        marginTop: window.innerWidth <= 1600 ? '0' : '0.2vw',
                        borderBottom: '1px solid black',
                        height: '1.4vw',
                        minHeight: 24
                    }}
                />
                <Select
                    variant="unstyled"
                    rightSection={<></>}
                    rightSectionWidth="0"
                    size="1.2vw"
                    aria-label="unit"
                    name="unit"
                    data={['reps', 'sec', 'min']}
                    sx={{
                        marginLeft: '0.3vw',
                        marginTop: window.innerWidth <= 1600 ? '0' : '0.2vw',
                        width: '2.9vw',
                        borderBottom: '1px solid black',
                        height: '1.4vw',
                        minHeight: 24
                    }}
                />
                <Text ml={4} sx={{ fontSize: '1.2vw' }}>with</Text>
                <TextField
                    variant="unstyled"
                    size="1.2vw"
                    aria-label="weight"
                    name="weight"
                    step="0.01"
                    type="number"
                    min={0}
                    max={999}
                    sx={{ marginLeft: '0.2vw', marginTop: window.innerWidth <= 1600 ? 0 : '0.2vw', width: '2.4vw', borderBottom: '1px solid black', height: '1.4vw', minHeight: 24 }}
                />
                <Text sx={{ marginLeft: '0.1vw', fontSize: '1.2vw' }}>kg</Text>
                <SubmitButton sx={{ marginLeft: '0.3vw', marginTop: '-1.1vw', alignSelf: 'center' }} />
            </Box>
        </GenericForm>
    )
}