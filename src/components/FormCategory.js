import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from '../customHooks/useForm';

const initialForm = {
  title: '',
  description: ''

}

const validationsForm= (form) =>{
  let errors= {} 
  let regexTitle = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if(!form.title){
    errors.title = 'Title is required'
    }else if(!regexTitle.test(form.title)){
      errors.title= 'Title only accepts letters and blanks'
    }

  if(!form.description){
      errors.description = 'description is required'
    }  

  return errors
}

export const FormCategory = ()=>{

  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit
    }= useForm(initialForm, validationsForm)

  return(
   
    <Container className="mt-2">   
        <Form onSubmit={handleSubmit}>          
          <Form.Group  className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
              size="sm"
              type="text"
              name='title'
              placeholder="Title"
					    onChange={handleChange} 
              onBlur={handleBlur}
              value={form.title} required unique
              />   
              {errors.title && <p className= 'alert-danger'>{errors.title}</p>}    
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
             size="sm"
             type="text"
             name='description'
             placeholder="Description"
					   onChange={handleChange} 
             onBlur={handleBlur} 
             value={form.description} required
             />
             {errors.description && <p className= 'alert-danger'>{errors.description}</p>}           
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto"> 
            <Button size="sm" variant="primary" type="submit">
              Add Category
            </Button> 
          </Form.Group>
          </Form>      
    </Container>         
   
  )
}
