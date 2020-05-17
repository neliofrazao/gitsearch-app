import { createGlobalStyle } from 'styled-components'
import colors from '../Theme/colors'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${colors.gray};
    color: ${colors.graphite};
    font-size: 1rem;
  }
`
export default GlobalStyle
