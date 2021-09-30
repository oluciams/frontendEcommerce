import * as yup from 'yup'

export const userSchema= yup.object().shape({

  name: yup.string().required('Name Required'),
  lastname: yup.string().required('Lastname Required'),
  email: yup.string().email('plaese type a correct email!').required(),
  profilePicture: yup.string(),      
  password: yup.string().min(6, 'At least 6 characters').max(10, 'Max 10 characters').required(),
  confirmationPassword: yup.string()
  .oneOf([yup.ref('password'), null], "Passwords don't match!").required('Required field')
}) 