import React, { useState, useContext} from 'react';
import { CreateProductFormContainer } from '../Products/components/CreateProductFormContainer';
import { ProductsContext } from '../context/ProductsContext';


export const Products = ()=> {

  
  return (
    
    <div> 
      <h3 className="text-center">Agregar un producto nuevo</h3>
      <CreateProductFormContainer/>
    </div>
  )
}

