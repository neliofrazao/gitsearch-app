import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import LoadContainder from './Loading.styles'

const Loading = () => (
  <LoadContainder data-testid="data-load">
    <Grid container justify="center" alignItems="center">
      <CircularProgress className="circular-progress" />
    </Grid>
  </LoadContainder>
)

export default Loading
