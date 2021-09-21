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

  
  const createProduct = async(product)=>{     
    const {data} = await productsApi.post('/products', product, {
      headers: {
        'authorization': userToken 
      }      
    })
    setProducts([...products, data])
  }

  const deleteProduct = async (id)=>{   
    const newProducts = products.filter((product)=> product._id !== id)
    setProducts(newProducts)

    setTimeout(async() =>{
      const {status} = await productsApi.delete(`/products/${id}`, {
        headers: {
        'authorization': userToken 
       } 
      })           
      if (status ===400){
        fetchData()
      }
    }, 3000)
  }

  const updateProduct = async (
    id,{
    title: titleEdited,
    description: descriptionEdited,
    price: priceEdited,
    image:imageEdited,
    categoryId: categoryIdEdited,
    quantity: quantityEdited})=>{
     
       const newProducts = products.map((product)=>{
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
     

      setTimeout(async ()=>{
        const {status} = await productsApi.put(`/products/${id}`, {
          title: titleEdited,
          description: descriptionEdited,
          price: priceEdited,
          image:imageEdited,
          category: categoryIdEdited,
          quantity: quantityEdited})
          
          if (status === 403){
            fetchData()
          }
      }, 3000)
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