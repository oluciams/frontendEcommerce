import React, { useState } from 'react';

import { CreateProductFormContainer } from '../Products/components/CreateProductFormContainer';


export const Products = ()=> {

  const [product, setProduct] = useState({});

  const saveFormData = (title, description, value, image, categoryId, quantity) => {
    const data= {title, description, value, image, categoryId, quantity}
    setProduct(data)
  }


  return (
    <div> 
      <h3 className="text-center">Agregar un producto nuevo</h3>
      <CreateProductFormContainer saveFormData={saveFormData}/>
    </div>
  )
}

