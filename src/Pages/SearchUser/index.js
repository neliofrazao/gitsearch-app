import React, { useContext, useCallback } from 'react'
import { Typography, Button } from '@material-ui/core'
import { SearchForm, UserDetail } from '../../Components'
import { LoadContext, DataGrid } from '../../Shared'
import { formatRepoListRows, repoGridHeader } from './functions/dataGridSetup'
import { initialValues, schema } from './functions/formSetup'
import { useLocalStorage, useSearchHistory } from '../../utils/customHook'
import api from '../../api/users/users'

const fetchUserData = async (userName) => {
  const params = { direction: 'desc' }
  const [userData, dataRepos] = await Promise.all([
    api.getUsers(userName),
    api.getUserRepo(userName, params),
  ])
  return {
    userData,
    dataRepos,
  }
}
const hasUserInfo = (obj) => Object.keys(obj).length !== 0
const SearchUser = () => {
  const { isLoad, setIsLoad } = useContext(LoadContext)
  const [storedUser, setUserValue] = useLocalStorage('dataUser', {})
  const [, setHistoryValue] = useSearchHistory()

  const handleSeachUser = useCallback(
    async ({ userName }) => {
      setIsLoad(true)
      try {
        const { userData, dataRepos } = await fetchUserData(userName)
        setHistoryValue(userData)
        setUserValue({ user: userData, repos: formatRepoListRows(dataRepos) })
      } catch (error) {
        setUserValue({})
      }
      setIsLoad(false)
    },
    [setHistoryValue, setIsLoad, setUserValue],
  )

  const handleOrderBy = useCallback(async () => {
    setIsLoad(true)
    try {
      const params = { sort: 'updated' }
      const data = await api.getUserRepo(storedUser.user.login, params)
      setUserValue({ user: storedUser.user, repos: formatRepoListRows(data) })
    } catch (error) {
      setUserValue({})
    }
    setIsLoad(false)
  }, [setIsLoad, setUserValue, storedUser.user])

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
          {hasUserInfo(storedUser) && (
            <>
              <UserDetail
                followers={storedUser.user.followers}
                following={storedUser.user.following}
                userName={storedUser.user.name}
                userLocation={storedUser.user.location}
                htmlUrl={storedUser.user.html_url}
                thumbnailPath={storedUser.user.avatar_url}
              />
              <Typography variant="h5" component="h3" gutterBottom>
                Lista de repositórios do usuário
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ordernar por:
                <Button onClick={() => handleOrderBy()}>Orderdar por última atualização</Button>
              </Typography>
              <DataGrid columns={repoGridHeader} rows={storedUser.repos} />
            </>
          )}
        </>
      )}
    </div>
  )
}

export default SearchUser
