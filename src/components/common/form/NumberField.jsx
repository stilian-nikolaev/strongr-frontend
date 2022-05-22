import React from 'react'
import { useField } from 'formik'
import { NumberInput } from '@mantine/core';

export default function NumberField({ name, ...props }) {
  const [field] = useField(name);
  return (
    <NumberInput {...field} {...props} />
  )
}

