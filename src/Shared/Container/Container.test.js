import React from 'react'
import { render } from '@testing-library/react'
import { injectRouter } from '../../helpers/testHelpers'
import Container from './index'

const BaseRender = () => (
  <Container>
    <span>Some Link</span>
  </Container>
)

describe('Container()', () => {
  test('should renders children props', () => {
    const { getByTestId } = render(injectRouter(<BaseRender />))
    const SUT = getByTestId('data-container').innerHTML
    const expectResult = '<span>Some Link</span>'

    expect(SUT).toContain(expectResult)
  })
})
