import React from 'react'
import { useField } from 'formik'
import { TextInput } from '@mantine/core';

export default function TextField({ name, ...props }) {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error ? `${props.placeholder} ${meta.error.split(' ').splice(1).join(' ')}` : ''

  return (
    <TextInput {...field} {...props} error={meta.error && meta.touched} description={error} />
  )
}
