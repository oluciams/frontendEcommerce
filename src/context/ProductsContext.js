import { createContext, useContext, useEffect, useState } from 'react';
import { productsApi } from '../utils/api'
import { AuthContext } from './AuthContextProvider'
import { notify } from '../utils/notify'



export const ProductsContext = createContext();


export const ProductsContextProvider = ({children})=>{

  const {userToken} = useContext(AuthContext)  

  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [dataLoading, setDataLoading] = useState(false);

  const changeDataLoading = ()=>{
    setDataLoading(true)
  }

  const fetchData = async()=>{    
    const {data} = await productsApi.get('/products')
    setProducts(data)    
  }

  const fetchCategories = async()=>{
    const {data} = await productsApi.get('/categories')
    setCategories(data)      
  }
  
  const createProduct = async(product)=>{    
    try {  
      const {data} = await productsApi.post('/products', product, {
        headers: {
          'authorization': userToken 
        }              
      })

      setProducts([...products, data])      
      notify("Product created", true)      
      setDataLoading(false)  
    } catch (err) {      
        err.response.data.code ===11000 ? notify('Title repeated', false)
          : notify(err.response.statusText, false)          
        setDataLoading(false) 
   }
  }

  const deleteProduct = async (id)=>{
    try {
      const newProducts = await products.filter((product)=> product._id !== id)
      setProducts(newProducts)
  
      const {data} = await productsApi.delete(`/products/${id}`, {
            headers: {'authorization': userToken} 
      })  

      notify(data.message, true) 
      
    } catch (err) {    
      notify(err.response.statusText , false) 
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
      if(product._id === id)     
      {
          return {...product,
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
      setDataLoading(false)
      notify("Product edited", true)       
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
    dataLoading,     
    createProduct,
    deleteProduct,
    updateProduct, 
    changeDataLoading
  }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}