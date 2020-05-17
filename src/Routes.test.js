import React from 'react'
import { waitForElement, render } from '@testing-library/react'
import { injectRouter } from './helpers/testHelpers'
import Routes from './Routes'

describe('Routes', () => {
  test('Should load searchUser route', async () => {
    const { getByTestId } = render(injectRouter(<Routes />, {}))
    await waitForElement(() => getByTestId('data-search-user'))
  })
})
