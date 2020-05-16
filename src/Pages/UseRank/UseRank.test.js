import React from 'react'
import { render } from '@testing-library/react'
import UseRank from './index'

describe('UseRank()', () => {
  test('should SearchHistory renders', () => {
    const { getByTestId } = render(<UseRank />)
    const SUT = getByTestId('data-user-rank')
    expect(SUT).toBeDefined()
  })
})
