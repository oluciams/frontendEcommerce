import React, {useState, useContext} from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { CreateProductFormContainer } from '../Products/components/CreateProductFormContainer';
import { Row } from 'react-bootstrap';
import { Cards } from '../components/Cards';


export const Products = ()=> {

  const {products, deleteProduct} = useContext(ProductsContext)  
  
  const [productToEdit, setProductToEdit] = useState();  

  const editProduct = (id)=>{      
    const product = products.filter((product)=> product._id === id)[0]      
    setProductToEdit(product)
    
  }
  
  if(!products) return <h3>Loading . . . </h3>
  
  return (    
    <div>     
      
      <CreateProductFormContainer product={productToEdit}/>  
        <Row>  
          {                
              products.map(({ _id, title, price, image }) =>  
              <Cards
                key={_id}
                cardKey={_id}
                id={_id}
                cardTitle={title}
                cardPrice={price}
                cardImage={image}                
                deleteProduct={deleteProduct}               
                editProduct={editProduct}/>               
              )
          }
        </Row>        
    </div>
  )
}

