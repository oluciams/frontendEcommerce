
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
     
    try {
      const apiData= await axios.post('http://localhost:3001/login', user)
      // console.log(apiData.message);
    } catch (error) {
      const {message} = error.response.data
      console.log(message);
      
    }          
    
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
  