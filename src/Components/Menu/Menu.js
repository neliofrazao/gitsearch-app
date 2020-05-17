import React from 'react'
import PropTypes from 'prop-types'
import { List } from '@material-ui/core'
import Nav from './Menu.styles'

const Menu = ({ children }) => (
  <Nav data-testid="data-menu">
    <List>{children}</List>
  </Nav>
)

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Menu
