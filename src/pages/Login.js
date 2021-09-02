
import React from 'react';
import { Container} from 'react-bootstrap';
import { FormLogin } from '../components/FormLogin';

export const Login = () => {
  return (
      
      <Container fluid className="mt4">        
          <p className="text-center mt-4"> <strong>Log in to Your Account!</strong></p> 
          <FormLogin/>                          
      </Container>           
      
    )
  }
  