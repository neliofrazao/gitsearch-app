import http from '../../utils/http'
import api from './users'

describe('Users()', () => {
  test('should GET users url with right param', async () => {
    expect.assertions(1)
    jest.spyOn(http, 'get')
    http.get.mockImplementation((url) => ({
      data: {
        url,
      },
    }))

    const result = await api.getUsers('username')
    expect(result.url).toBe('/users/username')
    http.get.mockRestore()
  })

  test('should GET user repos url with right param', async () => {
    expect.assertions(1)
    jest.spyOn(http, 'get')
    http.get.mockImplementation((url) => ({
      data: {
        url,
      },
    }))

    const result = await api.getUserRepo('username')
    expect(result.url).toBe('/users/username/repos')
    http.get.mockRestore()
  })
})
