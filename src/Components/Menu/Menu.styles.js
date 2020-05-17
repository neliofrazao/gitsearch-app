import styled from 'styled-components'

const Nav = styled.nav`
  text-align: right;
  & .active {
    font-weight: bold;
  }
  & .MuiListItem-root {
    display: inline-block;
    width: auto;
  }
  & .MuiButton-text {
    font-size: 1em;
    &: hover {
      background: rgba(200, 200, 200, 0.2);
    }
  }
`

export default Nav
