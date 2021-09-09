import React, { useState, useContext, useEffect} from 'react';
import { Banner } from '../../components/Banner';
import { ProductsContext } from '../../context/ProductsContext';
import {CreateProductFormView} from '../components/CreateProductFormView';


export const CreateProductFormContainer = ({product})=>{
  console.log("producto desde container", product)

  const {createProduct, updateProduct} =useContext(ProductsContext)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [image, setImage] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [editMode, setEditMode] = useState(false);

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
      if(editMode){
        console.log("id en handleSubmit", product.id)
        updateProduct(product.id, ({
          title, description, value, image, categoryId, quantity}))
          setEditMode(false)
      } else {
        createProduct({title, description, value, image, categoryId, quantity})
      }      
    
    setTitle('');
    setDescription('');
    setValue('');
    setImage('')
    setCategoryId('')	
    setQuantity('')

    };
  } 

    useEffect(() => {
      if(product &&
         product.title &&
         product.description &&
         product.value &&
         product.image &&
         product.categoryId &&
         product.quantity){

      setTitle(product.title);
      setDescription(product.description);
      setValue(product.value);
      setImage(product.image)
      setCategoryId(product.categoryId)	
      setQuantity(product.quantity)
      setEditMode(true)
      }
    }, [product]);

  
     
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
