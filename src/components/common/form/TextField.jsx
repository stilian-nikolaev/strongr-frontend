import React from 'react'
import { useField } from 'formik'
import { TextInput } from '@mantine/core';

export default function TextField({ name, ...props }) {
  const [field] = useField(name);
  return (
    <TextInput {...field} {...props} />
  )
}
