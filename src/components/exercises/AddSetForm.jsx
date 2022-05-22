import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Box, Text, UnstyledButton } from '@mantine/core'
import { MdDone } from 'react-icons/md'

import GenericForm from '../common/form/GenericForm'
import Select from '../common/form/Select'
import TextField from '../common/form/TextField'
import { useCreateSet } from '../../hooks/sets'
import { endpoints } from '../../service/apiEndpoints'
import { WorkoutStore } from '../../stores/WorkoutStore'

export default function AddSetForm({ exerciseId, setAddingSet }) {
    const { workoutId } = WorkoutStore;
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: data => useCreateSet(workoutId, exerciseId, data),
        onError: () => console.log('error posting set'),
        onSuccess: (res) => {
            console.log(res);
            queryClient.invalidateQueries(endpoints.workouts.one(workoutId))
            setAddingSet(false)
        }
    })

    function onSubmit(data) {
        console.log(data);
        mutation.mutate(data)
    }

    return (
        <GenericForm onSubmit={onSubmit} initialValues={{ amount: 10, unit: 'reps', weight: 100 }}>
            <Box sx={{ display: 'flex', alignItems: 'stretch', marginLeft: window.innerWidth < 1600 ? -3 : 0 }}>
                <TextField
                    variant="unstyled"
                    size="1.2vw"
                    aria-label="amount"
                    name="amount"
                    type="number"
                    min={0}
                    max={99}
                    sx={{ width: '1.6vw', marginTop: window.innerWidth < 1600 ? '0' : '0.2vw', borderBottom: '1px solid black', height: '1.4vw', minHeight: 24 }}
                />
                <Select
                    variant="unstyled"
                    rightSection={<></>}
                    rightSectionWidth="0"
                    size="1.2vw"
                    ml={4}
                    aria-label="unit"
                    sx={{ marginTop: window.innerWidth < 1600 ? '0' : '0.2vw', width: '2.9vw', borderBottom: '1px solid black', height: '1.4vw', minHeight: 24 }}
                    name="unit"
                    data={['reps', 'sec', 'min']}
                />
                <Text ml={4} sx={{ fontSize: '1.2vw' }}>with</Text>
                <TextField
                    variant="unstyled"
                    size="1.2vw"
                    aria-label="weight"
                    ml={2} name="weight"
                    type="number"
                    min={0}
                    max={999}
                    sx={{ marginTop: window.innerWidth < 1600 ? 0 : '0.2vw', width: '2.4vw', borderBottom: '1px solid black', height: '1.4vw', minHeight: 24 }}
                />
                <Text sx={{ fontSize: '1.2vw' }}>kg</Text>
                <UnstyledButton
                    type="submit"
                    sx={{
                        marginRight: '-0.5vw',
                        alignSelf: 'center',
                        height: 1,
                        marginTop: '-1.1vw',
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}>
                    <MdDone size="1vw" type="submit" />
                </UnstyledButton>
            </Box>
        </GenericForm>
    )
}