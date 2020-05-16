import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders app text', () => {
  const { getByText } = render(<App />)
  const textElement = getByText(/app/i)
  expect(textElement).toBeInTheDocument()
})
