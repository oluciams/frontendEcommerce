import React, {useState, useEffect} from 'react';
import { FormRegister} from '../components/FormRegister';
import { Container} from 'react-bootstrap';
import {signupApi} from '../utils/api'


const axios = require('axios').default;

export const Register = () => {

  const [user, setUser] = useState({});

  const saveFormData = (name, lastname, email, password, confirmationPassword, profilePicture) => {
    const data= {name, lastname, email, password, confirmationPassword, profilePicture}
    setUser(data)
  }
   

  useEffect( async () => {  
    await  signupApi.post('/signup', user)
      // await axios.post('http://localhost:3001/signup', user)
      .then(function (response) {      
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });       
  }, [user]);

  
  return (  

    <Container className="mt-2"> 
        <p className="text-center">Sign Up!</p>
        <FormRegister saveFormData={saveFormData} />    
    </Container>   
      
  )
}
