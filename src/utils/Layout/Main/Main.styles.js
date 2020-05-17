import styled from 'styled-components'

const Shell = styled.main`
  position: relative;
  z-index: 10;
  top: -4em;
  & .container {
    padding: 2em;
    min-height: 10em;
  }
`

export default Shell
