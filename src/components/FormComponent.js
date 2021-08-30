import React from 'react';
import { Form, Button, Container} from 'react-bootstrap';

export const FormComponent = ({ saveFormData }) => {
   
  return (      
    <Container className="mt-2">   
        <Form>          
          <Form.Group  className="mb-2 col-sm-6 mx-auto" controlId="formBasicName">        
            <Form.Control size="sm"  type="text" placeholder="Enter name" />           
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto" controlId="formBasicLastname">        
            <Form.Control size="sm" type="text" placeholder="Enter Lastname" />           
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto" controlId="formBasicEmail">        
            <Form.Control size="sm" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">            
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto" controlId="formBasicPassword">          
            <Form.Control size="sm" type="password" placeholder="Password" />
          </Form.Group>          
          <Form.Group className="mb-2 col-sm-6 mx-auto" controlId="">        
            <Form.Control size="sm" type="" placeholder="profilePicture" />           
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto" controlId=""> 
          <Button size="sm" variant="primary" type="submit">
            Submit
          </Button>      
          </Form.Group>

        </Form>      
    </Container>          
      
  )
}
