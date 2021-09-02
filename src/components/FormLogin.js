import React, { useState, useContext } from 'react';
import { Form, Button, Container} from 'react-bootstrap';
import { AuthContext } from '../context/AuthContextProvider';


export const FormLogin = ()=>{

  const {saveFormData, userToken} = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleOnSubmit = (e) => {
		e.preventDefault();
		if (email && password) {
			saveFormData(email, password);      
      setEmail('');
      setPassword('')      
		}
	}

  return (
    
  <Container className="mt-2"> 
    <Form onSubmit={handleOnSubmit}>  
      <Form.Group className="mb-2 col-sm-6 mx-auto">        
        <Form.Control 
          size="sm"
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmail}            
          name='email'/>            
        </Form.Group>
      <Form.Group className="mb-2 col-sm-6 mx-auto">          
        <Form.Control
          size="sm"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}            
          name='password'/>
        </Form.Group>
      <Form.Group className="mb-4 col-sm-6 mx-auto"> 
        <Button size="sm" variant="primary" type="submit">
        Log In
        </Button>      
      </Form.Group>
    </Form> 
    <h1>{userToken}</h1>    
  </Container>  

  )


}