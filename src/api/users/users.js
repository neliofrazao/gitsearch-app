import http from '../../utils/http'

const getUsers = async (userName) => {
  const { data } = await http.get(`/users/${userName}`)
  return data
}

const getUserRepo = async (userName, param = {}) => {
  const { data } = await http.get(`/users/${userName}/repos`, { params: param })
  return data
}

export default {
  getUsers,
  getUserRepo,
}
