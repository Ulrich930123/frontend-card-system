import {object, string} from 'yup'

export const UserValidationSchema = object().shape({
    name                : string ().required('Requerido'),
})
