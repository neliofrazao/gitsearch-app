import React from 'react'
import { render } from '@testing-library/react'
import Loading from './index'

describe('Loading()', () => {
  test('should Loading renders', () => {
    const { getByTestId } = render(<Loading />)
    const SUT = getByTestId('data-load')
    expect(SUT).toBeDefined()
  })
})
