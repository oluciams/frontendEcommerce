import React, { useState, useContext} from 'react';
import { CreateProductFormContainer } from '../Products/components/CreateProductFormContainer';
import { ProductsContext } from '../context/ProductsContext';
import { Banner } from '../components/Banner';


export const Products = ()=> {

  const {products, deleteProduct} = useContext(ProductsContext)

  
  return (
    
    <div> 
      <h3 className="text-center">Agregar un producto nuevo</h3>
      <CreateProductFormContainer/>
      <Banner/>
      
    </div>
  )
}

