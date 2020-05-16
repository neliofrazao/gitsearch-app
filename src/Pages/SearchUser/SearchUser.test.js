import React from 'react'
import { render } from '@testing-library/react'
import SearchUser from './index'

describe('SearchUser()', () => {
  test('should SearchUser renders', () => {
    const { getByTestId } = render(<SearchUser />)
    const SUT = getByTestId('data-search-user')
    expect(SUT).toBeDefined()
  })
})
