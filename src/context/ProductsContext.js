import { createContext, useEffect, useState } from 'react';
import {productsApi} from '../utils/api'


export const ProductsContext = createContext();


export const ProductsContextProvider = ({children})=>{

  const [products, setProducts] = useState();

  const fetchData = async()=>{
    const {data} = await productsApi.get('/products')
    setProducts(data)    
  }

  const createProduct = async(product)=>{
    const {data} = await productsApi.post('/products', product)
    setProducts([...products, data])
  }

  const deleteProduct = async (id)=>{    
    console.log("este es el id",id)
    const newProducts = products.filter((product)=> product._id !== id)
    setProducts(newProducts)

    setTimeout(async() =>{
      const {status} = await productsApi.delete(`/products/${id}`)           
      if (status ===400){
        fetchData()
      }
    }, 10000)
  }

  const editProduct = 


  useEffect(() => {
    fetchData()    
  }, []);

  const value ={
    products,    
    createProduct,
    deleteProduct,
    editProduct
  }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}