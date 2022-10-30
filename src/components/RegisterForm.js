import React from 'react';
import { Form, Button, Container} from 'react-bootstrap'
import {Field, Formik, ErrorMessage} from 'formik'
import { userSchema } from '../validations/user.validation'
import { signupApi } from '../utils/api'
import { notify } from '../utils/notify';
import { ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';

export const RegisterForm = ()=>{ 

  let history = useHistory()

  const initialValues = { name: '', lastname:'', email:'', password:'', confirmationPassword:'', profilePicture:''}

  const handleSubmitForm = async (values, { resetForm }) => {
    try {       
      await signupApi.post('/signup', values)           
      resetForm();
      notify("Registered successfully", true)
      history.push("/login")       
    } catch (error) {     
      notify("Something gone wrong", false)       
    }    
  };

    return(
    <div> 
      <p className="text-center mt-3">Sign Up!</p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}     
        validationSchema={userSchema} 
      >
        {
          ({values, handleSubmit})=>           
          <Container>            
            <Form onSubmit={handleSubmit}>
              <div className="row d-flex flex-column mb-2 col-sm-6 col-md-4 mx-auto">
              <Field className="border rounded py-2" name="name" value={values.name} type="text" placeholder="enter name" />
              <ErrorMessage name='name' >{msg => <div className='alert-danger col-ms'>{msg}</div>}</ErrorMessage>                          
              <Field className="mt-2 border rounded py-2" name="lastname" value={values.lastname} type="text" placeholder="enter lastname" />
              <ErrorMessage name='lastname' >{msg => <div className='alert-danger'>{msg}</div>}</ErrorMessage>
              <Field className="mt-2 border rounded py-2" name="email" value={values.email} type="email" placeholder="email" />
              <ErrorMessage name='email' >{msg => <div className='alert-danger'>{msg}</div>}</ErrorMessage>
              <Field className="mt-2 border rounded py-2" name="password" value={values.password} type="password" placeholder="password" />
              <ErrorMessage name='password' >{msg => <div className='alert-danger'>{msg}</div>}</ErrorMessage>
              <Field className="mt-2 border rounded py-2" name="confirmationPassword" value={values.confirmationPassword} type="password" placeholder="confirmation password" />
              <ErrorMessage name='confirmationPassword' >{msg => <div className='alert-danger'>{msg}</div>}</ErrorMessage>
              <Field className="mt-2 border rounded py-2 d-none" name="profilePicture" value={values.profilePicture} type="text" placeholder="profile picture"/> 
              <ErrorMessage name='profilePicture' >{msg => <div className='alert-danger'>{msg}</div>}</ErrorMessage>             
              </div> 
              <Button className="row d-flex mb-2 col-sm-6 col-md-4 mx-auto text-center" size="sm" variant="primary" type="submit">
                <span>Sign Up</span>
              </Button>
            </Form>  
          </Container>
        }
      </Formik>
      <ToastContainer/>
    </div>
  )
}  