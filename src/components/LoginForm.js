import React, { useContext } from 'react';
import { Form, Button, Container} from 'react-bootstrap'
import {Field, Formik, ErrorMessage} from 'formik'
import { loginSchema } from '../validations/login.validation';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../context/AuthContextProvider';
import { useHistory } from 'react-router-dom';

export const LoginForm = ()=>{ 

  const {saveFormData, redirect, resetRedirect } = useContext(AuthContext)
  const initialValues = { email:'', password:''}
  
  let history = useHistory()

  const handleSubmitForm = (values, { resetForm }) => {
    saveFormData(values)  
    resetForm()       
  };  

  if(redirect){
    history.push("/")
    setTimeout(() => {
      resetRedirect(false)  
    }, 5000);      
  }

  return(

    <div>  
      
      <p className="text-center mt-4"> <strong>Log in to Your Account!</strong></p> 

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}     
        validationSchema={loginSchema} 
      >
        {
          ({values, handleSubmit})=>           
          <Container>            
            <Form onSubmit={handleSubmit}>
              <div className="row d-flex flex-column mb-2 col-sm-6 col-md-4 mx-auto">              
              <Field className="mt-2 border rounded py-2" name="email" value={values.email} type="email" placeholder="email" />
              <ErrorMessage name='email' >{msg => <div className='alert-danger'>{msg}</div>}</ErrorMessage>
              <Field className="mt-2 border rounded py-2" name="password" value={values.password} type="password" placeholder="password" />
              <ErrorMessage name='password' >{msg => <div className='alert-danger'>{msg}</div>}</ErrorMessage>                      
              </div> 
              <Button className="row d-flex mb-2 col-sm-6 col-md-4 mx-auto text-center" size="sm" variant="primary" type="submit">
                <span>Login</span>
              </Button>
            </Form>  
          </Container>
        }
      </Formik>
      <ToastContainer/>
    </div>
  )
}  