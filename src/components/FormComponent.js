import React, {useState} from 'react';
import { Form, Button, Container} from 'react-bootstrap';

export const FormComponent = ({ saveFormData }) => {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleName = (e) => {
		setName(e.target.value);
	}

  const handleLastname = (e) => {
		setLastname(e.target.value);
	}
  
  const handleEmail = (e) => {
		setEmail(e.target.value);
	}

  const handlePassword = (e) => {
		setPassword(e.target.value);
	}

  const handleOnSubmit = (e) => {
		e.preventDefault();
		if (name && lastname && email && password) {
			saveFormData(name, lastname, email, password);
      setName('');
			setLastname('');
      setEmail('');
      setPassword('')			
		}
	}


  return (      
    <Container className="mt-2">   

        <Form onSubmit={handleOnSubmit}>          
          <Form.Group  className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter name"
              value={name}
					    onChange={handleName}           
              name='name'/>
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
             size="sm"
             type="text"
             placeholder="Enter Lastname"
             value={lastname}
					   onChange={handleLastname}            
             name='lastname'/>
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control 
              size="sm"
              type="email"
              placeholder="email"
              value={email}
					    onChange={handleEmail}            
              name='email'/>            
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto" controlId="formBasicPassword">          
            <Form.Control
              size="sm"
              type="password"
              placeholder="Password"
              value={password}
					    onChange={handlePassword}            
              name='password'/>
          </Form.Group>          
          <Form.Group className="mb-2 col-sm-6 mx-auto" controlId="">        
            <Form.Control
             size="sm"
             type=""
             placeholder="profilePicture" />           
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto"> 
          <Button size="sm" variant="primary" type="submit">
            Submit
          </Button>      
          </Form.Group>

        </Form>      
    </Container>          
      
  )
}
