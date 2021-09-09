import React, {useState, useContext} from 'react';
import { Banner } from '../components/Banner';
import { ProductsContext } from '../context/ProductsContext';
import { CreateProductFormContainer } from '../Products/components/CreateProductFormContainer';

export const Products = ()=> {

  const {products} = useContext(ProductsContext)
 
  const [productToEdit, setProductToEdit] = useState();

  const handleEditProduct = (id)=>{
      
      const product = products.filter((product)=> product._id === id)[0]      
      setProductToEdit(product)
  }
  
  return (    
    <div> 
      <h3 className="text-center">Agregar un producto nuevo</h3>
      <CreateProductFormContainer product={productToEdit}/>  
      <Banner editProduct={handleEditProduct}
      />    
    </div>
  )
}

