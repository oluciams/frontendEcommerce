
import React, { useState, useEffect} from 'react';
import { Container} from 'react-bootstrap';
import { FormLogin } from '../components/FormLogin';

const axios = require ('axios').default;


export const Login = () => { 

  const [user, setUser] = useState({});

  const saveFormData = (email, password) => {
    const data= {email, password}
    setUser(data)   
  }

  useEffect(async () => {
    await axios.post('http://localhost:3001/login', user)
    .then(function (response) {      
      console.log(response);
      
    })
    .catch(function (error) {     
      console.log(error);

    });       
    
  }, [user]);
   
  return (
      <>
        <Container fluid className="mt4">
          <p className="text-center mt-4"> <strong>Log in to Your Account!</strong></p> 
          <FormLogin saveFormData= {saveFormData}/>                    
        </Container>           
      </>
  )
  }
  