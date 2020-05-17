import React from 'react'
import * as Yup from 'yup'
import { Typography } from '@material-ui/core'
import { SearchForm } from '../../Components'

const REQUIRED_MESSAGE = 'Campo obrigatório'
const schema = Yup.object().shape({
  userName: Yup.string().required(REQUIRED_MESSAGE),
})

const initialValues = {
  userName: '',
}

const handleSeachUser = async (payload) => {
  console.log(payload)
}

const SearchUser = () => {
  return (
    <div data-testid="data-search-user">
      <Typography variant="h4" component="h2" gutterBottom>
        Busca por usuário do Github
      </Typography>
      <SearchForm
        initialValues={initialValues}
        formSchema={schema}
        handleSubmit={handleSeachUser}
      />
    </div>
  )
}

export default SearchUser
