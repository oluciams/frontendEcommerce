import * as yup from 'yup'

export const productSchema= yup.object ({  
    title: yup.string().required('Title Required'),
    description: yup.string().required('Description Required'),
    price: yup.number().required().positive().integer(),
    image: yup.string().required(),
    categoryId: yup.string().required(),
    quantity: yup.number().required().positive().integer()    
    
})

// expRegNum = /^(0|[1-9]\d*)$/



// export function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }


  
// const emailValidator = () => {
//     if (!email || !validateEmail(email)) {
//       setErrors({
//         ...errors,
//         email: true,
//         emailErrorMessage: 'invalid email',
//       });
//     } else {
//       setErrors({
//         ...errors,
//         email: false,
//         message: 'invalid email',
//       });
//     }
//   };


// const handleEmailOnChange = (e) => {
//     const validEmail = e.target.value;
//     setEmail(validEmail);
//     emailValidator();
//   };


// onKeyDown="if(this.value.length==10) return false;" 

// const isStrNormPosInt = (str: string) => {
//     return /^([1-9]\d*)$/.test(str) && Number(str) <= 2147483647 // postgres max int
//   }