import { TextInput } from '@mantine/core';
import { useField } from 'formik'
import React from 'react'

export default function TextField({name, ...props}) {
    const [field] = useField(name);
  return (
    <TextInput {...field} {...props}/>
  )
}
