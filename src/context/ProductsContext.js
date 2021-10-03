import { createContext, useContext, useEffect, useState } from 'react';
import {productsApi} from '../utils/api'
import { AuthContext } from './AuthContextProvider';


export const ProductsContext = createContext();


export const ProductsContextProvider = ({children})=>{

  const {userToken} = useContext(AuthContext)  

  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();

  const fetchData = async()=>{
    
    const {data} = await productsApi.get('/products')
    setProducts(data)    
  }

  const fetchCategories = async()=>{
    const {data} = await productsApi.get('/categories')
    setCategories(data)  
    console.log("categories", data)  
  }

  
  const createProduct = async(product, base64EncodedImage)=>{

  try {

    let cloudinaryImageId

    const fetchData = () => {
        return fetch('http://localhost:3001/api/upload', {
            method: 'POST',
            body: JSON.stringify({ data: base64EncodedImage }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => response.json())
        .then((data) => cloudinaryImageId = data.public_id)
        .then((data) => console.log("soy data", data.public_id))
        
    }
    await fetchData(); 

    product.image = cloudinaryImageId

    console.log("soy product", product)

    const {data} = await productsApi.post('/products', product, {
      headers: {
        'authorization': userToken 
      }      
    })
    setProducts([...products, data])
          
      
      // setFileInputState('');
      // setPreviewSource('');
      // setSuccessMsg('Image uploaded successfully');
  } catch (err) {
      console.error(err);
      // setErrMsg('Something went wrong!');
  }

  console.log("saoy product", product)





    // const {data} = await productsApi.post('/products', product, {
    //   headers: {
    //     'authorization': userToken 
    //   }      
    // })
    // setProducts([...products, data])
  }

  const deleteProduct = async (id)=>{   
    const newProducts = await products.filter((product)=> product._id !== id)
    setProducts(newProducts)

    const {status} = await productsApi.delete(`/products/${id}`, {
        headers: {'authorization': userToken} 
      }) 

      if (status ===400){
        fetchData()
      }
  }

  const updateProduct = async(
    id,{
    title: titleEdited,
    description: descriptionEdited,
    price: priceEdited,
    image:imageEdited,
    categoryId: categoryIdEdited,
    quantity: quantityEdited})=>{
     
       const newProducts = await products.map((product)=>{
        if(product._id === id){
          
          return {... product,
            title: titleEdited,
            description: descriptionEdited,
            price: priceEdited,
            image:imageEdited,
            categoryId: categoryIdEdited,
            quantity: quantityEdited}

        } else{
          return product
        }
      })
      setProducts(newProducts)

      const {status} = await productsApi.put(`/products/${id}`,  {
        title: titleEdited,
        description: descriptionEdited,
        price: priceEdited,
        image:imageEdited,
        categoryId: categoryIdEdited,
        quantity: quantityEdited},
        {
          headers: {
          'authorization': userToken
         } 
        })          
        if (status === 403){
          fetchData()
        }
    }
 
  useEffect(() => {
    fetchData() 
    fetchCategories()   
  }, []);

  const value ={
    products,  
    categories,     
    createProduct,
    deleteProduct,
    updateProduct
  }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}