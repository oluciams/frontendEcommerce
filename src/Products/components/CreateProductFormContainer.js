import React, { useState, useContext, useEffect} from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import {CreateProductFormView} from '../components/CreateProductFormView';


export const CreateProductFormContainer = ({product})=>{

  const {createProduct, updateProduct, dataLoading} =useContext(ProductsContext)

  // Product States
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState('');
  

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
      imageValidator()
  };

  const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setPreviewSource(reader.result);           
      };      
  };

  // Product Logic
  
  const titleValidator = () => {
    if (!title || title.length<=4) {
      setErrors({
        ...errors,
        title: true,
        titleErrorMessage: 'is required - At least 4 characters',
      });
    } else {
      setErrors({
        ...errors,
        title: false,
      });
    }
  };

  const descriptionValidator = () => {
    if (!description || description.length<=8) {
      setErrors({
        ...errors,
        description: true,
        descriptionErrorMessage: 'is required - At least 8 characters',
      });
    } else {
      setErrors({
        ...errors,
        description: false,
      });
    }
  };

  const priceValidator = () => {
    if (!price) {
      setErrors({
        ...errors,
        price: true,
        priceErrorMessage: 'is required',
      });
    } else {
      setErrors({
        ...errors,
        price: false,
      });
    }
  };

  const categoryValidator = () => {
    if (category==='') {
      setErrors({
        ...errors,
        category: true,
        categoryErrorMessage: 'is required',
      });
    } else {
      setErrors({
        ...errors,
        category: false,
      });
    }
  };

  const quantityValidator = () => {
    if (!quantity) {
      setErrors({
        ...errors,
        quantity: true,
        quantityErrorMessage: 'is required',
      });
    } else {
      setErrors({
        ...errors,
        quantity: false,
      });
    }
  };

  const imageValidator = () => {
    if (!fileInputState) {
      setErrors({
        ...errors,
        image: true,
        imageErrorMessage: 'is required',
      });
    } else {
      setErrors({
        ...errors,
        image: false,
      });
    }
  };

  const handleTitle= (e)=>{
    const validtitle = e.target.value
    setTitle(validtitle)
    titleValidator()
  }

  const handleDescription= (e)=>{
    const validdescription = e.target.value
    setDescription(validdescription)
    descriptionValidator()

  }  

  const handlePrice= (e)=>{
    const validprice = e.target.value
    setPrice(validprice)
    priceValidator()
  }

  const handleCategory= (e)=>{
    const validcategory = e.target.value
    setCategory(validcategory)
    categoryValidator()
  }

  const handleQuantity= (e)=>{
    const validquantity = e.target.value
    setQuantity(validquantity)
    quantityValidator()

  }
  
  const handleCancel = ()=>{
    setTitle('')
    setDescription('')
    setPrice('')   
    setCategory('')	
    setQuantity('')
    setFileInputState('')
    setPreviewSource('')
    setEditMode(false)
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
    setFileInputState('')
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
            error={errors}
            dataLoading={dataLoading}
            editMode={editMode}           
            handleOnSubmit={handleOnSubmit}     
            handleTitle={handleTitle}
            titleValidator={titleValidator}
            handleDescription={handleDescription}
            descriptionValidator={descriptionValidator}
            handlePrice={handlePrice}
            priceValidator={priceValidator}            
            handleCategory={handleCategory}
            categoryValidator={categoryValidator}
            handleQuantity={handleQuantity}
            quantityValidator={quantityValidator}
            handleFileInputChange={handleFileInputChange}            
            fileInputState={fileInputState}
            previewSource={previewSource}
            imageValidator={imageValidator}
            handleCancel={handleCancel}   
        />          
  )
}
