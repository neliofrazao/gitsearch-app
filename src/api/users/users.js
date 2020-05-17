import http from '../../utils/http'

const getUsers = async (userName) => {
  const { data } = await http.get(`/users/${userName}`)
  return data
}

export default {
  getUsers,
}
