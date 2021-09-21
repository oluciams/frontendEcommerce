import React, {useState, useContext} from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { CreateProductFormContainer } from '../Products/components/CreateProductFormContainer';
import { Row } from 'react-bootstrap';
import { Cards } from '../components/Cards';
import { AuthContext } from '../context/AuthContextProvider';

export const Products = ()=> {

  const {products, deleteProduct} = useContext(ProductsContext)  
  
  const [productToEdit, setProductToEdit] = useState();

  const handleEditProduct = (id)=>{      
      const product = products.filter((product)=> product._id === id)[0]      
      setProductToEdit(product)
      
  }

  
  if(!products) return <h3>Loading . . . </h3>
  
  return (    
    <div>     
      <h3 className="text-center">Agregar un producto nuevo</h3>
      <CreateProductFormContainer product={productToEdit}/>  
        <Row>  
          {                
              // products &&
              products.map(({ _id, title, price, image }) =>  
              <Cards
                key={_id}
                cardKey={_id}
                id={_id}
                cardTitle={title}
                cardPrice={price}
                cardImage={image}
                variant={'primary'} text={'Ver más'} color='blue'
                deleteProduct={deleteProduct}
                editProduct={handleEditProduct}/>               
              )
          }
        </Row>        
    </div>
  )
}

