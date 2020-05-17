import React from 'react'
import { render, screen } from '@testing-library/react'
import { injectRouter } from '../../helpers/testHelpers'
import { Menu, MenuItem } from './index'

const BaseRender = () => (
  <Menu>
    <MenuItem link="/deck" title="item menu">
      Home
    </MenuItem>
    <MenuItem link="/historico-busca" title="item menu">
      Histórico de busca
    </MenuItem>
    <MenuItem link="/rank" title="item menu">
      Top 5 github
    </MenuItem>
  </Menu>
)

describe('Menu()', () => {
  test('should render menu component ', () => {
    const { getByTestId } = render(injectRouter(<BaseRender />))
    expect(getByTestId('data-menu')).toBeDefined()
  })

  test('should render menuItem component with three items ', () => {
    render(injectRouter(<BaseRender />))
    const menuItems = screen.getAllByTitle('item menu').length

    expect(menuItems).toBe(3)
  })
})
