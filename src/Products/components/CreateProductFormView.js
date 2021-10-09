import React, { useContext } from 'react';
import { Form, Button, Container, Spinner} from 'react-bootstrap';
import { ProductsContext } from '../../context/ProductsContext';
import { ToastContainer } from 'react-toastify';

export const CreateProductFormView = ({  
    title,
    description,
    price,    
    category, 
    quantity,
    editMode,    
    handleTitle,
    handleDescription,
    handlePrice,    
    handleCategory,
    handleQuantity,   
    handleOnSubmit,
    handleFileInputChange,    
    fileInputState,
    previewSource,
    error,
    dataLoading,    
    titleValidator,
    descriptionValidator,
    priceValidator,
    categoryValidator,
    quantityValidator,
    imageValidator,
    handleCancel  

})=> {

  const {categories} =useContext(ProductsContext)

  return (
    <Container className="mt-2">
        { editMode ?  
          <h4 className="text-center mt-2">Edit product</h4>
        :
          <h4 className="text-center mt-2">Add a new product</h4>        
        }
        <Form onSubmit={handleOnSubmit}>          
          <Form.Group  className="mb-2 col-sm-6 mx-auto">        
            <Form.Control              
              size="sm"
              type="text"
              placeholder="Title" 
              value={title}
              onChange={handleTitle}                     
              name='title'
              onBlur={titleValidator}/>
              {error.title && <p className= 'text-danger'>{error.titleErrorMessage}</p>}
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
             size="sm"
             type="text"
             placeholder="Description"
             value={description}
					   onChange={handleDescription}        
             name='description'
             onBlur={descriptionValidator}/>
             {error.description && <p className= 'text-danger'>{error.descriptionErrorMessage}</p>}
          </Form.Group>
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control 
              size="sm"
              type='number'
              placeholder="$"
              value={price}
					    onChange={handlePrice}          
              name='price'            
              onBlur={priceValidator}/>
              {error.price && <p className= 'text-danger'>{error.priceErrorMessage}</p>}            
          </Form.Group>   
          <Form.Group className="mb-2 col-sm-6 mx-auto"> 
            <Form.Select                        
              size="sm"
              type="text"                          
              value={category}
					    onChange={handleCategory}
              onBlur={categoryValidator}             
              name='category'> 
              <option></option>
              {categories &&
              categories.map(({_id, title}) => 
                 <option key={_id} value={_id}>{title}</option> 
              )}                         
            </Form.Select> 
            {error.category && <p className= 'text-danger'>{error.categoryErrorMessage}</p>}              
          </Form.Group>  
          <Form.Group className="mb-2 col-sm-6 mx-auto">        
            <Form.Control
             size="sm"
             type='number'
             placeholder="Quantity" 
             value={quantity}
					   onChange={handleQuantity}           
             name='quantity'
             onBlur={quantityValidator}/> 
             {error.quantity && <p className= 'text-danger'>{error.quantityErrorMessage}</p>}        
          </Form.Group>          
          <Form.Group className="mb-2 col-sm-6 mx-auto">          
            <Form.Control
              size="sm"
              type="file"             
              value={fileInputState}
					    onChange={handleFileInputChange}       
              name='image'
              onBlur={imageValidator}/>
              {error.image && <p className= 'text-danger'>{error.imageErrorMessage}</p>}
          </Form.Group>  
          <Form.Group className="mb-2 col-sm-6 mx-auto text-center">  
            {previewSource && (
            <img                                     
              src={previewSource}
              alt="chosen"
              style={{ height: '100px', width: '40%' }}
            />
            )}  
          </Form.Group>  
            
            { dataLoading ? 
                     
              <Form.Group className="row d-flex mb-2 col-sm-6 mx-auto">
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>                
              </Form.Group>
            
            :
              <Form.Group className="row d-flex mb-2 col-sm-6 mx-auto">             
                <Button size="sm" variant="primary" type="submit">
                  submit
                </Button>
              </Form.Group>               
            }
            {editMode &&
            <Form.Group className="row d-flex mb-2 col-sm-6 mx-auto">  
            <Button variant='danger' size='sm' onClick={()=>handleCancel()}>Cancel</Button>
            </Form.Group>            
            }           
        </Form>         
      <ToastContainer/>  
    </Container>
  )
}