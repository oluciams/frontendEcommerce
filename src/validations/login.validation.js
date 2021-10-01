import * as yup from 'yup'

export const loginSchema= yup.object ({
   
    email: yup.string().email('plaese type a correct email!').required(), 
    password: yup.string().min(6, 'At least 6 characters').max(10).required(),
    
})