import React from 'react'
import { useField } from 'formik'
import { Autocomplete, TextInput } from '@mantine/core';

export default function AutoCompleteField({ name, ...props }) {
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;
    
    return (
        <Autocomplete {...field} {...props} onChange={value => setValue(value)} />
    )
}
