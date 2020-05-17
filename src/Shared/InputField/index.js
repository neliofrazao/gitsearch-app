import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

const InputField = ({ label, name, error, formikProps, ...props }) => (
  <TextField
    label={label}
    fullWidth
    onChange={formikProps.handleChange}
    onBlur={formikProps.handleBlur}
    value={formikProps.values.name}
    name={name}
    error={Boolean(error)}
    helperText={error}
    {...props}
  />
)

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  formikProps: PropTypes.object.isRequired,
  error: PropTypes.string,
}

InputField.defaultProps = {
  error: '',
}

export default InputField
