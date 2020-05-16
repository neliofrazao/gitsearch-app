import React from 'react'
import { render } from '@testing-library/react'
import UserRank from './index'

describe('UserRank()', () => {
  test('should SearchHistory renders', () => {
    const { getByTestId } = render(<UserRank />)
    const SUT = getByTestId('data-user-rank')
    expect(SUT).toBeDefined()
  })
})
