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
import * as yup from 'yup'

export default function AddSetForm({ exerciseId, onSuccess, initialValues }) {
    const { workoutId } = useParams();
    const queryClient = useQueryClient()
    const focusTrapRef = useFocusTrap();

    const validationSchema = yup
        .object({
            amount: yup.number().positive().integer().min(1).max(99).required(),
            weight: yup.number().positive().min(0).max(999).required(),
            unit: yup.string().oneOf(['reps', 'sec', 'min']).required(),
        })

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
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            initialValues={initialValues || { amount: 10, unit: 'reps', weight: 100 }}
        >
            <Box ref={focusTrapRef} sx={{ display: 'flex', alignItems: 'stretch', marginLeft: window.innerWidth < 1600 ? -3 : 0 }}>
                <TextField
                    inlineError={false}
                    variant="unstyled"
                    size="1.2vw"
                    aria-label="amount"
                    placeholder="Amount"
                    name="amount"
                    type="number"
                    sx={(theme) => ({
                        borderBottom: `1px solid ${theme.colors.main[0]}`,
                        width: '1.6vw',
                        marginTop: window.innerWidth <= 1600 ? '0' : '0.2vw',
                        height: '1.4vw',
                        minHeight: 24,
                        '& ::placeholder': {
                            color: `${theme.colors.main[0]} !important`
                        }
                    })}
                />
                <Select
                    variant="unstyled"
                    rightSection={<></>}
                    rightSectionWidth="0"
                    size="1.2vw"
                    aria-label="unit"
                    name="unit"
                    data={['reps', 'sec', 'min']}
                    sx={(theme) => ({
                        borderBottom: `1px solid ${theme.colors.main[0]}`,
                        marginLeft: '0.3vw',
                        marginTop: window.innerWidth <= 1600 ? '0' : '0.2vw',
                        width: '2.9vw',
                        height: '1.4vw',
                        minHeight: 24
                    })}
                />
                <Text ml={4} sx={{ fontSize: '1.2vw' }}>with</Text>
                <TextField
                    inlineError={false}
                    placeholder="Weight"
                    variant="unstyled"
                    size="1.2vw"
                    aria-label="weight"
                    name="weight"
                    step="0.01"
                    type="number"
                    min={0}
                    max={999}
                    sx={(theme) => ({
                        borderBottom: `1px solid ${theme.colors.main[0]}`,
                        marginLeft: '0.2vw',
                        marginTop: window.innerWidth <= 1600 ? 0 : '0.2vw',
                        width: '2.4vw',
                        height: '1.4vw',
                        minHeight: 24,
                        '& ::placeholder': {
                            color: `${theme.colors.main[0]} !important`
                        }
                    })}
                />
                <Text sx={{ marginLeft: '0.1vw', fontSize: '1.2vw' }}>kg</Text>
                <SubmitButton sx={{ marginLeft: '0.3vw', marginTop: '-1.1vw', alignSelf: 'center' }} />
            </Box>
        </GenericForm>
    )
}