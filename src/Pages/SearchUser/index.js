import React, { useContext, useState } from 'react'
import { Typography } from '@material-ui/core'
import { SearchForm } from '../../Components'
import { LoadContext, DataGrid } from '../../Shared'
import { formatRepoListRows, repoGridHeader } from './functions/dataGridSetup'
import { initialValues, schema } from './functions/formSetup'
import api from '../../api/users/users'

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
  const [repoInfo, setRepoInfo] = useState([])

  const handleSeachUser = async ({ userName }) => {
    setIsLoad(true)
    try {
      const { userData, dataRepos } = await fetchUserData(userName)
      setUserIfo(userData)
      setRepoInfo(formatRepoListRows(dataRepos))
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
          <Typography variant="h5" component="h3" gutterBottom>
            Lista de repositórios do usuário
          </Typography>
          <DataGrid columns={repoGridHeader} rows={repoInfo} />
        </>
      )}
    </div>
  )
}

export default SearchUser
