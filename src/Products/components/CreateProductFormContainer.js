import React, { useState, useContext} from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import {CreateProductFormView} from '../components/CreateProductFormView';


export const CreateProductFormContainer = ()=>{

  const {createProduct} =useContext(ProductsContext)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [image, setImage] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleTitle= (e)=>{
    setTitle(e.target.value)
  }

  const handleDescription= (e)=>{
    setDescription(e.target.value)
  }
  
  const handleValue= (e)=>{
    setValue(e.target.value)
  }
  
  const handleImage= (e)=>{
    setImage(e.target.value)
  }

  const handleCategoryId= (e)=>{
    setCategoryId(e.target.value)
  }

  const handleQuantity= (e)=>{
    setQuantity(e.target.value)
  } 

  const handleOnSubmit = (e) => {
		e.preventDefault()

    if (title && description && value && image && categoryId && quantity ) {
      createProduct({title, description, value, image, categoryId, quantity})
    }

    setTitle('');
    setDescription('');
    setValue('');
    setImage('')
    setCategoryId('')	
    setQuantity('')			
  };

     
  return (  
      <CreateProductFormView
           title={title}
           description={description}
           value={value}
           image={image}
           categoryId={categoryId}
           quantity={quantity}
           handleOnSubmit={handleOnSubmit}     
           handleTitle={handleTitle}
           handleDescription={handleDescription}
           handleValue={handleValue}
           handleImage={handleImage}
           handleCategoryId={handleCategoryId}
           handleQuantity={handleQuantity}
      />  
  )
}
