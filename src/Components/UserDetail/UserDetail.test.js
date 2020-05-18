import React from 'react'
import { render } from '@testing-library/react'
import { createMatchMedia } from '../../helpers/testHelpers'
import UserDetail from './index'

const BaseRender = () => (
  <UserDetail
    followers={22}
    following={20}
    userName="User Name"
    userLocation="cidade"
    htmlUrl="http://someurl"
    thumbnailPath="/image-path.jpg"
  />
)

describe('UserDetail()', () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth)
  })

  test('should render UserDetail component', () => {
    const { getByTestId } = render(<BaseRender />)
    expect(getByTestId('data-user-detail')).toBeDefined()
  })
})
