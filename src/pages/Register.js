import React from 'react';
import { FormComponent} from '../components/FormComponent';
import { Container} from 'react-bootstrap';

export const Register = () => {

  const saveFormData = () => {

}
   
  return (  

    <Container className="mt-4"> 
        <h3 className="text-center">Register</h3>
        <FormComponent saveFormData={saveFormData} />    
    </Container>   
      
  )
}
