import React from 'react'
import { render } from '@testing-library/react'
import { injectRouter } from '../../helpers/testHelpers'
import Layout from './index'

const BaseRender = () => (
  <Layout>
    <p data-testid="data-html-elemnt">Some text</p>
  </Layout>
)

describe('Layout()', () => {
  test('should render layout component ', () => {
    const { getByTestId } = render(injectRouter(<BaseRender />))
    expect(getByTestId('data-layout')).toBeDefined()
  })
})
