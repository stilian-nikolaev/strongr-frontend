import React from 'react'
import { useField } from 'formik'
import { TextInput } from '@mantine/core';

export default function TextField({ name, ...props }) {
  const [field, meta] = useField(name);
  const error = meta.touched ? meta.error : ''
  return (
    <TextInput {...field} {...props} error={error} />
  )
}
