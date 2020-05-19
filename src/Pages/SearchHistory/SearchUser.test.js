import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import SearchHistory from './index'

describe('SearchHistory()', () => {
  test('should SearchHistory renders', async () => {
    const { getByTestId } = render(<SearchHistory />)
    await waitForElement(() => getByTestId('data-search-history'))

    expect(getByTestId('data-search-history')).toBeDefined()
  })
})
