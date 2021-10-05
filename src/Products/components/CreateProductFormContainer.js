import React, { useState, useContext, useEffect} from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import {CreateProductFormView} from '../components/CreateProductFormView';


export const CreateProductFormContainer = ({product})=>{

  const {createProduct, updateProduct} =useContext(ProductsContext)

  // Product States
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [editMode, setEditMode] = useState(false);

  // Image States
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();

  // Image  logic

  const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      previewFile(file);
      setSelectedFile(file);
      setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setPreviewSource(reader.result);           
      };      
  };

  // Product Logic
  const handleTitle= (e)=>{
    setTitle(e.target.value)
  }

  const handleDescription= (e)=>{
    setDescription(e.target.value)
  }
  
  const handlePrice= (e)=>{
    setPrice(e.target.value)
  }

  const handleCategory= (e)=>{
    setCategory(e.target.value)
  }

  const handleQuantity= (e)=>{
    setQuantity(e.target.value)
  } 

  // Submit for images and products

  const handleOnSubmit = (e) => {
		e.preventDefault()

    // Product
    if (title && description && price && category && quantity ) {
      if(editMode){       
   
        updateProduct(product._id, ({        
          title, description, price, categoryId: category, quantity}))
          setEditMode(false)

      } else { 
        
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);  
        reader.onloadend = () => {   

          createProduct({title, description, price, categoryId: category, quantity}, reader.result)          

        };
        reader.onerror = () => {
          console.error('Something went wrong!')            
        };         
      }      
    
    setTitle('');
    setDescription('');
    setPrice('');   
    setCategory('')	
    setQuantity('')

    setFileInputState('');
    setPreviewSource('');

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
            category={category}
            quantity={quantity}
            handleOnSubmit={handleOnSubmit}     
            handleTitle={handleTitle}
            handleDescription={handleDescription}
            handlePrice={handlePrice}            
            handleCategory={handleCategory}
            handleQuantity={handleQuantity}
            handleFileInputChange={handleFileInputChange}            
            fileInputState={fileInputState}
            previewSource={previewSource}   
        />          
  )
}
