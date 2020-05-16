import React from 'react'
import { render } from '@testing-library/react'
import SearchHistory from './index'

describe('SearchHistory()', () => {
  test('should SearchHistory renders', () => {
    const { getByTestId } = render(<SearchHistory />)
    const SUT = getByTestId('data-search-history')
    expect(SUT).toBeDefined()
  })
})
