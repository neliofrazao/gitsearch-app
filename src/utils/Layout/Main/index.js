import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from '@material-ui/core'
import Container from '../../../Shared/Container'
import Shell from './Main.styles'

const Main = ({ children }) => (
  <Shell>
    <Container>
      <Paper>
        <div className="container">{children}</div>
      </Paper>
    </Container>
  </Shell>
)

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.object])).isRequired,
}

export default Main
