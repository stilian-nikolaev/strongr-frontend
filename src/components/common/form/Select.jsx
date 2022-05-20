import { NativeSelect } from '@mantine/core';
import { useField } from 'formik'
import React from 'react'

export default function Select({name, ...props}) {
    const [field] = useField(name);
  return (
    <NativeSelect {...field} {...props}/>
  )
}
