import React from 'react'
import { render, screen } from '@testing-library/react'
import { injectRouter } from '../../helpers/testHelpers'
import Menu from './index'

describe('Menu()', () => {
  test('should render menu component ', () => {
    const { getByTestId } = render(injectRouter(<Menu />))
    expect(getByTestId('data-menu')).toBeDefined()
  })

  test('should render menuItem component with three items ', () => {
    render(injectRouter(<Menu />))
    const menuItems = screen.getAllByRole('button').length

    expect(menuItems).toBe(3)
  })
})
