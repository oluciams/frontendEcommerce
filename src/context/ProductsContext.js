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
    }, 3000)
  }

  const updateProduct = async (
    id,{
    title: titleEdited,
    description: descriptionEdited,
    value: valueEdited,
    image:imageEdited,
    categoryId: categoryIdEdited,
    quantity: quantityEdited})=>{

      const newProducts = products.map((product)=>{
        if(product.id === id){
          return {... product,
            title: titleEdited,
            description: descriptionEdited,
            value: valueEdited,
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
          value: valueEdited,
          image:imageEdited,
          categoryId: categoryIdEdited,
          quantity: quantityEdited, status: false})
          
          if (status === 400){
            fetchData()
          }
      }, 3000)
  }

  useEffect(() => {
    fetchData()    
  }, []);

  const value ={
    products,    
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