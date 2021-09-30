import * as yup from 'yup'

export const productSchema= yup.object ({  
    title: yup.string().required('Title Required'),
    description: yup.string().required('Description Required'),
    price: yup.number().required().positive().integer(),
    image: yup.string().required(),
    categoryId: yup.string().required(),
    quantity: yup.number().required().positive().integer()    
    
})