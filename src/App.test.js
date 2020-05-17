import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App()', () => {
  test('should render layout component ', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('data-layout')).toBeDefined()
  })
})
