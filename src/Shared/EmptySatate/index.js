import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import Container from './EmptySatate.styles'

const EmptySatate = ({ text }) => (
  <Container>
    <Grid container justify="center" alignItems="center">
      <Typography variant="body1" gutterBottom>
        {text}
      </Typography>
    </Grid>
  </Container>
)

EmptySatate.propTypes = {
  text: PropTypes.string.isRequired,
}
export default EmptySatate
