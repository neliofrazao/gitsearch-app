import React from 'react'
import { render } from '@testing-library/react'
import { injectRouter } from '../../helpers/testHelpers'
import NavLink from './index'

const BaseRender = () => (
  <NavLink to="/topfive" title="some link" data-testid="data-nav-link">
    Some Link
  </NavLink>
)

describe('NavLink()', () => {
  test('should href attribute to equal a "/topfive"', () => {
    const { getByTestId } = render(injectRouter(<BaseRender />))
    const SUT = getByTestId('data-nav-link').getAttribute('href')

    expect(SUT).toEqual('/topfive')
  })
})
