import React, { useState, useContext, useEffect} from 'react';
import { Banner } from '../../components/Banner';
import { ProductsContext } from '../../context/ProductsContext';
import {CreateProductFormView} from '../components/CreateProductFormView';


export const CreateProductFormContainer = ({product})=>{

  const {createProduct, updateProduct} =useContext(ProductsContext)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
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
  
  const handlePrice= (e)=>{
    setPrice(e.target.value)
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
    if (title && description && price && image && category && quantity ) {
      if(editMode){       
   
        updateProduct(product._id, ({        
          title, description, price, image, categoryId: category, quantity}))
          setEditMode(false)
      } else {       
        createProduct({title, description, price, image, categoryId: category, quantity})
      }      
    
    setTitle('');
    setDescription('');
    setPrice('');
    setImage('')
    setCategory('')	
    setQuantity('')

    };
  } 

    useEffect(() => {
      if(product &&
         product.title &&
         product.description &&
         product.price &&
         product.image &&
         product.categoryId &&
         product.quantity
         ){              


      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price);
      setImage(product.image)
      setCategory(product.categoryId)	
      setQuantity(product.quantity)
      setEditMode(true)
      }
    }, [product]);

  
     
  return (  
     
        <CreateProductFormView

            title={title}
            description={description}
            price={price}
            image={image}
            category={category}
            quantity={quantity}
            handleOnSubmit={handleOnSubmit}     
            handleTitle={handleTitle}
            handleDescription={handleDescription}
            handlePrice={handlePrice}
            handleImage={handleImage}
            handleCategory={handleCategory}
            handleQuantity={handleQuantity}
        />    
      

  )
}
