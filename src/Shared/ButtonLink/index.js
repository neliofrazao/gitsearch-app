import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import NavLink from '../NavLink'

const ButtonLink = ({ children, link, ...props }) => (
  <Button component={NavLink} to={link} {...props}>
    {children}
  </Button>
)

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default ButtonLink
