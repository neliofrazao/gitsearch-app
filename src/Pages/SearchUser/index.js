import React, { useContext, useState } from 'react'
import * as Yup from 'yup'
import { Typography } from '@material-ui/core'
import { SearchForm } from '../../Components'
import api from '../../api/users/users'
import { LoadContext } from '../../Shared'

const REQUIRED_MESSAGE = 'Campo obrigatório'
const schema = Yup.object().shape({
  userName: Yup.string().required(REQUIRED_MESSAGE),
})

const initialValues = {
  userName: '',
}

const fetchUserData = async (userName) => {
  const [userData, dataRepos] = await Promise.all([
    api.getUsers(userName),
    api.getUserRepo(userName),
  ])
  return {
    userData,
    dataRepos,
  }
}

const SearchUser = () => {
  const { isLoad, setIsLoad } = useContext(LoadContext)
  const [, setUserIfo] = useState([])
  const [, setRepoInfo] = useState([])

  const handleSeachUser = async ({ userName }) => {
    setIsLoad(true)
    try {
      const { userData, dataRepos } = await fetchUserData(userName)
      setUserIfo(userData)
      setRepoInfo(dataRepos)
    } catch (error) {
      setUserIfo([])
      setRepoInfo([])
    }
    setIsLoad(false)
  }

  return (
    <div data-testid="data-search-user">
      <Typography variant="h4" component="h2" gutterBottom>
        Busca por usuário do Github
      </Typography>
      {!isLoad && (
        <>
          <SearchForm
            initialValues={initialValues}
            formSchema={schema}
            handleSubmit={handleSeachUser}
          />
        </>
      )}
    </div>
  )
}

export default SearchUser
