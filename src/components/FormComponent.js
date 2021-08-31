import React, {useState} from 'react';
import { Form, Button, Container} from 'react-bootstrap';

export const FormComponent = ({ saveFormData }) => {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

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

  const handleConfirmationPassword = (e) => {
		setConfirmationPassword(e.target.value);
	}

  const handleProfilePicture = (e) => {
		setProfilePicture(e.target.value);
	}

  const handleOnSubmit = (e) => {
		e.preventDefault();
		if (name && lastname && email && password && confirmationPassword && profilePicture ) {
			saveFormData(name, lastname, email, password, confirmationPassword, profilePicture);
      setName('');
			setLastname('');
      setEmail('');
      setPassword('')
      setConfirmationPassword('')	
      setProfilePicture('')		
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
          <Form.Group className="mb-2 col-sm-6 mx-auto">          
            <Form.Control
              size="sm"
              type="password"
              placeholder="Password"
              value={password}
					    onChange={handlePassword}            
              name='password'/>
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto">          
            <Form.Control
              size="sm"
              type="password"
              placeholder="Confirmation password"
              value={confirmationPassword}
					    onChange={handleConfirmationPassword}            
              name='password'/>
          </Form.Group>                  
          <Form.Group className="mb-2 col-sm-6 mx-auto" controlId="">        
            <Form.Control
             size="sm"
             type="texto"
             placeholder="profilePicture" 
             value={profilePicture}
					   onChange={handleProfilePicture}            
             name='profilePicture'/>         
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto"> 
          <Button size="sm" variant="primary" type="submit">
            Sign Up
          </Button>      
          </Form.Group>
        </Form>      
    </Container>          
      
  )
}
