import { Box, Modal, Text, UnstyledButton } from '@mantine/core'
import React from 'react'
import GenericForm from '../common/form/GenericForm'
import Select from '../common/form/Select'
import TextField from '../common/form/TextField'
import { MdDone } from 'react-icons/md'
import { useMutation, useQueryClient } from 'react-query'
import { useCreateSet } from '../../hooks/sets'
import { endpoints } from '../../service/apiEndpoints'

export default function AddSetForm({ exerciseId, selectedWorkoutId, setAddingSet}) {

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: data => useCreateSet(selectedWorkoutId, exerciseId, data),
        onError: () => console.log('error posting set'),
        onSuccess: (res) => {
            console.log(res);
            queryClient.invalidateQueries(endpoints.workouts.one(selectedWorkoutId))
            setAddingSet(false)
            //or invalidate queries
        }
    })

    function onSubmit(data) {
        console.log(data);
        mutation.mutate(data)
    }

    return (
        <GenericForm onSubmit={onSubmit} initialValues={{ amount: 10, unit: 'reps', weight: 20 }}>
            <Box sx={{ display: 'flex', marginLeft: '-0.3vw', marginTop: -10 }}>
                <TextField
                    variant="unstyled"
                    size="md"
                    aria-label="amount"
                    name="amount"
                    type="number"
                    min={0}
                    max={99}
                    sx={{ width: '1.7vw', borderBottom: '1px solid black', height: 32 }}
                />
                <Select
                    variant="unstyled"
                    rightSection={<></>}
                    rightSectionWidth="0"
                    size="md"
                    ml={4}
                    aria-label="unit"
                    sx={{ width: '2.6vw', borderBottom: '1px solid black', height: 32 }}
                    name="unit"
                    data={['reps', 'sec', 'min']}
                />
                <Text ml={4} sx={{ alignSelf: 'center', marginTop: 9 }}>with</Text>
                <TextField
                    variant="unstyled"
                    size="md"
                    aria-label="weight"
                    ml={2} name="weight"
                    type="number"
                    min={0}
                    max={999}
                    sx={{ width: '2.4vw', borderBottom: '1px solid black', height: 32 }} />
                <Text sx={{ alignSelf: 'center', marginTop: 9 }}>kg</Text>
                <UnstyledButton type="submit" ml={4} sx={{
                    alignSelf: 'center', height: 1, marginTop: -10, '&:hover': {
                        cursor: 'pointer'
                    }
                }}>
                    <MdDone size={15} type="submit" />
                </UnstyledButton>
            </Box>
        </GenericForm>
    )
}
