import React from 'react'
import { NumberInput} from '@mantine/core';
import { useField } from 'formik'

export default function NumberField({ name, ...props }) {
  const [field] = useField(name);
  return (
    <NumberInput {...field} {...props} />
  )
}

