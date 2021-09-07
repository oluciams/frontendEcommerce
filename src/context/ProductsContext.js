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

  useEffect(() => {
    fetchData()    
  }, []);

  const value ={
    products,    
    createProduct

  }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}