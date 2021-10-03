import React, { useContext } from 'react';
import { Form, Button, Container} from 'react-bootstrap';
import { ProductsContext } from '../../context/ProductsContext';
import Upload from './Upload';

export const CreateProductFormView = ({  
    title,
    description,
    price,
    image,
    category, 
    quantity,    
    handleTitle,
    handleDescription,
    handlePrice,
    handleImage,
    handleCategory,
    handleQuantity,   
    handleOnSubmit

})=> {

  const {categories} =useContext(ProductsContext)

  return (
    <Container className="mt-2">  
        <Form onSubmit={handleOnSubmit}>          
          <Form.Group  className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
              size="sm"
              type="text"
              placeholder="Title" 
              value={title}
              onChange={handleTitle}                     
              name='title'/>
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
             size="sm"
             type="text"
             placeholder="Description"
             value={description}
					   onChange={handleDescription}        
             name='description'/>
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control 
              size="sm"
              type='text'
              placeholder="$"
              value={price}
					    onChange={handlePrice}          
              name='price'/>            
          </Form.Group>    

          <Form.Group className="mb-2 col-sm-6 mx-auto"> 
            <Form.Select
              aria-label="Default select example"              
              size="sm"
              type="text"                          
              value={category}
					    onChange={handleCategory}             
              name='category'> 
              <option >- - - - - -</option>
              { categories &&
              categories.map(({_id, title}) => 
                 <option key={_id} value={_id}>{title}</option> 
              )}                         
            </Form.Select>           
          </Form.Group>     

          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
             size="sm"
             type='text'
             placeholder="Quantity" 
             value={quantity}
					   onChange={handleQuantity}           
             name='quantity'/>         
          </Form.Group>

          <Form.Group className="mb-2 col-sm-6 mx-auto">          
            <Form.Control
              size="sm"
              type="text"
              placeholder="url"
              value={image}
					    onChange={handleImage}       
              name='image'/>
          </Form.Group> 

          {/* <Form.Group className="mb-2 col-sm-6 mx-auto">  
          <Upload></Upload>       
      
          </Form.Group>  */}

          <Form.Group className="mb-2 col-sm-6 mx-auto"> 
          <Button size="sm" variant="primary" type="submit">
            submit
          </Button>      
          </Form.Group>
        </Form>     
          
    </Container>
  )
}


// CreateTaskFormView.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   handleDescription: PropTypes.func.isRequired,
//   handleTitle: PropTypes.func.isRequired,
// };


