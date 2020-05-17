import React from 'react'
import { render } from '@testing-library/react'
import { injectRouter } from '../../helpers/testHelpers'
import Header from './index'

describe('Header()', () => {
  test('should render Header component ', () => {
    const { getByTestId } = render(injectRouter(<Header />))
    expect(getByTestId('data-header')).toBeDefined()
  })
})
