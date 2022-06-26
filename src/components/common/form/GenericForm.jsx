import React from 'react'
import { Form, Formik } from 'formik'

export default function GenericForm({ children, ...formProps }) {
  return (
    <Formik  {...formProps}>
      <Form>{children}</Form>
    </Formik>
  )
}
