import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, getIn } from 'formik'
import { Button, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { InputField } from '../../Shared'

const SearchForm = ({ initialValues, formSchema, handleSubmit }) => (
  <>
    <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={handleSubmit}>
      {(formikProps) => (
        <Form>
          <Grid container spacing={3} direction="row" justify="flex-start" alignItems="center">
            <Grid item xs={10}>
              <InputField
                label="Nome do usuário"
                name="userName"
                error={getIn(formikProps.errors, 'userName', '')}
                formikProps={formikProps}
              />
            </Grid>
            <Grid item xs={2}>
              <Button type="submit" title="buscar por usuários" data-testid="data-button-search">
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  </>
)

SearchForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  formSchema: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default SearchForm
