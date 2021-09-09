import React, { useState, useContext, useEffect} from 'react';
import { Banner } from '../../components/Banner';
import { ProductsContext } from '../../context/ProductsContext';
import {CreateProductFormView} from '../components/CreateProductFormView';


export const CreateProductFormContainer = ({product})=>{

  const {createProduct, updateProduct} =useContext(ProductsContext)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
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

  const handleCategory= (e)=>{
    setCategory(e.target.value)
  }

  const handleQuantity= (e)=>{
    setQuantity(e.target.value)
  } 

  const handleOnSubmit = (e) => {
		e.preventDefault()
    if (title && description && value && image && category && quantity ) {
      if(editMode){       
   
        updateProduct(product._id, ({        
          title, description, value, image, categoryId: category, quantity}))
          setEditMode(false)
      } else {       
        createProduct({title, description, value, image, categoryId: category, quantity})
      }      
    
    setTitle('');
    setDescription('');
    setValue('');
    setImage('')
    setCategory('')	
    setQuantity('')

    };
  } 

    useEffect(() => {
      if(product &&
         product.title &&
         product.description &&
         product.value &&
         product.image &&
         product.category &&
         product.quantity){      

      setTitle(product.title);
      setDescription(product.description);
      setValue(product.value);
      setImage(product.image)
      setCategory(product.category)	
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
            category={category}
            quantity={quantity}
            handleOnSubmit={handleOnSubmit}     
            handleTitle={handleTitle}
            handleDescription={handleDescription}
            handleValue={handleValue}
            handleImage={handleImage}
            handleCategory={handleCategory}
            handleQuantity={handleQuantity}
        />    
      

  )
}
