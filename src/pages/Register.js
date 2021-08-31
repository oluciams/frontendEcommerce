import React, {useState, useEffect} from 'react';
import { FormComponent} from '../components/FormComponent';
import { Container} from 'react-bootstrap';


const axios = require('axios').default;

export const Register = () => {

  const [user, setUser] = useState({});

  const saveFormData = (name, lastname, email, password, confirmationPassword, profilePicture) => {
    const data= {name, lastname, email, password, confirmationPassword, profilePicture}
    setUser(data)
  }
   

  useEffect( async () => {   
      await axios.post('http://localhost:3001/signup', user)
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
        <FormComponent saveFormData={saveFormData} />    
    </Container>   
      
  )
}
