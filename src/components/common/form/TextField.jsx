import React, { useState } from 'react'
import { useField } from 'formik'
import { Box, TextInput } from '@mantine/core';

import ErrorPopper from './ErrorPopper';

export default function TextField({ name, inlineError = true, ...props }) {
  const [field, meta] = useField(name);
  const [referenceElement, setReferenceElement] = useState(null);
  const message = meta.touched && meta.error ? `${props.placeholder} ${meta.error.split(' ').splice(1).join(' ')}` : '';

  return (
    <Box>
      <TextInput
        {...field}
        {...props}
        ref={setReferenceElement}
        error={inlineError && meta.error && meta.touched}
        description={inlineError && message} />
      {!inlineError && <ErrorPopper message={message} meta={meta} referenceElement={referenceElement} />}
    </Box>
  )
}