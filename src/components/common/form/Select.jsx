import React from 'react'
import { useField } from 'formik'
import { NativeSelect } from '@mantine/core';

export default function Select({ name, ...props }) {
  const [field] = useField(name);
  return (
    <NativeSelect {...field} {...props} />
  )
}
