import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Text = styled(Typography)`
  display: flex;
  align-items: center;
  & span {
    padding-left: 0.5em;
  }
`

export default Text
