import * as Yup from 'yup'

const REQUIRED_MESSAGE = 'Campo obrigatório'
export const schema = Yup.object().shape({
  userName: Yup.string().required(REQUIRED_MESSAGE),
})

export const initialValues = {
  userName: '',
}
