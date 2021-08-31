import React from 'react';
import { Form, Button, Container} from 'react-bootstrap';

export const FormProduct = ()=> {
  return (

    <Container className="mt-2">   

        <Form>          
          <Form.Group  className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
              size="sm"
              type="text"
              placeholder="Title" 
              value=""                      
              name='title'/>
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
             size="sm"
             type="text"
             placeholder="Description"
             value=""
					   onChange         
             name='description'/>
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control 
              size="sm"
              type="text"
              placeholder="$"
              value=""
					    onChange           
              name='value'/>            
          </Form.Group>          
          <Form.Group className="mb-2 col-sm-6 mx-auto">          
            <Form.Control
              size="sm"
              type="text"
              placeholder="url"
              value=""
					    onChange           
              name='image'/>
          </Form.Group>                  
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
             size="sm"
             type="text"
             placeholder="Category" 
             value=""
					   onChange            
             name='categoryId'/>         
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
             size="sm"
             type="text"
             placeholder="Quantity" 
             value=""
					   onChange            
             name='quantity'/>         
          </Form.Group>

          <Form.Group className="mb-2 col-sm-6 mx-auto"> 
          <Button size="sm" variant="primary" type="submit">
            submit
          </Button>      
          </Form.Group>
        </Form>      
    </Container>          

  )


}