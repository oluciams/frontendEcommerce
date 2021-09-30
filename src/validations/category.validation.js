import * as yup from 'yup'

export const categorySchema= yup.object ({
    title: yup.string().required('Title Required').unique(),
    description: yup.string().required()    
})