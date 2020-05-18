import React from 'react'
import { render, screen } from '@testing-library/react'
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

  test('should render UserDetail with right value', () => {
    render(<BaseRender />)
    const getFollowers = screen.getByText('Seguidores: 22')
    const getFollowing = screen.getByText('Seguindo: 20')
    const getUserName = screen.getByText('User Name')
    const getLocation = screen.getByText('cidade')
    const getHtmlUrl = screen.getByText('http://someurl')
    const getImage = screen.getByTestId('data-avatar')

    expect(getFollowers).toBeDefined()
    expect(getFollowing).toBeDefined()
    expect(getUserName).toBeDefined()
    expect(getLocation).toBeDefined()
    expect(getHtmlUrl).toBeDefined()
    expect(getImage).toBeDefined()
  })
})
