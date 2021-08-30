import React, {useState} from 'react';
import { FormComponent} from '../components/FormComponent';
import { Container} from 'react-bootstrap';
import {data} from '../utils/data'

export const Register = () => {

  //const [users, setUsers] = useState(data);

  const saveFormData = (name, lastname, email, password) => {
    const user= {name, lastname, email, password }
    console.log(user)
    //setUsers([user, ...users])
}
   
  return (  

    <Container className="mt-4"> 
        <h3 className="text-center">Register</h3>
        <FormComponent saveFormData={saveFormData} />    
    </Container>   
      
  )
}
