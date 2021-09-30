import * as yup from 'yup'

export const loginSchema= yup.object ({
   
    name: yup.string().min(6, 'Name at least 8 characters').max(10).required(),   
    email: yup.string().email('plaese type a correct email!').required(), 
    password: yup.string().min(6, 'Password at least 6 characters').max(10).required(),
    
})