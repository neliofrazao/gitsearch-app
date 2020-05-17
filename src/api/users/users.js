import http from '../../utils/http'

const getUsers = async (userName) => {
  const { data } = await http.get(`/users/${userName}`)
  return data
}

const getUserRepo = async (userName) => {
  const { data } = await http.get(`/users/${userName}/repos`)
  return data
}

export default {
  getUsers,
  getUserRepo,
}
