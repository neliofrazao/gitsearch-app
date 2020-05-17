import React from 'react'
import { List } from '@material-ui/core'
import MenuItem from './MenuItem/index'
import Nav from './Menu.styles'

const Menu = () => (
  <Nav data-testid="data-menu">
    <List>
      <MenuItem link="/" title="Home" role="menu">
        Home
      </MenuItem>
      <MenuItem link="/historico-busca" title="Histórico de busca">
        Histórico de busca
      </MenuItem>
      <MenuItem link="/rank" title="Top 5 github" role="menu">
        Top 5 github
      </MenuItem>
    </List>
  </Nav>
)
export default Menu
