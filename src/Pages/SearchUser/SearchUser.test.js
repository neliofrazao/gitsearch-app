import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import SearchUser from './index'
import api from '../../api/users/users'

const responseUser = {
  avatar_url: 'https://avatars1.githubusercontent.com/u/652572?v=4',
  bio: null,
  blog: 'https://www.linkedin.com/in/neliofrazao/',
  company: null,
  email: null,
  events_url: 'https://api.github.com/users/neliofrazao/events{/privacy}',
  followers: 23,
  followers_url: 'https://api.github.com/users/neliofrazao/followers',
  following: 32,
  following_url: 'https://api.github.com/users/neliofrazao/following{/other_user}',
  gists_url: 'https://api.github.com/users/neliofrazao/gists{/gist_id}',
  html_url: 'https://github.com/neliofrazao',
  location: 'João Pessoa - PB',
  name: 'Nélio Frazão',
  node_id: 'MDQ6VXNlcjY1MjU3Mg==',
}

const responseRepos = [
  {
    archived: false,
    description: 'A Simple Form Generator for Angular',
    disabled: false,
    fork: true,
    forks: 0,
    forks_count: 0,
    full_name: 'neliofrazao/angular-forms',
    html_url: 'https://github.com/neliofrazao/angular-forms',
    id: 102981260,
    language: 'TypeScript',
    name: 'angular-forms',
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDI5ODEyNjA=',
    pulls_url: 'https://api.github.com/repos/neliofrazao/angular-forms/pulls{/number}',
    size: 4351,
    svn_url: 'https://github.com/neliofrazao/angular-forms',
    url: 'https://api.github.com/repos/neliofrazao/angular-forms',
  },
]

describe('SearchUser()', () => {
  test('should SearchUser renders', () => {
    const { getByTestId } = render(<SearchUser />)
    const SUT = getByTestId('data-search-user')
    expect(SUT).toBeDefined()
  })

  test('should get user and repos data', async () => {
    api.getUsers = jest.fn().mockReturnValueOnce(responseUser)
    api.getUserRepo = jest.fn().mockReturnValueOnce(responseRepos)
    const { getByTestId } = render(<SearchUser />)
    const userSearch = getByTestId('data-user-search').querySelector('input')
    fireEvent.change(userSearch, { target: { value: 'userName' } })
    fireEvent.click(getByTestId('data-button-search'))
    await wait(() => {
      expect(api.getUsers).toHaveReturnedWith(responseUser)
      expect(api.getUserRepo).toHaveReturnedWith(responseRepos)
      expect(api.getUsers).toHaveBeenCalledTimes(1)
      expect(api.getUserRepo).toHaveBeenCalledTimes(1)
    })
  })
})
