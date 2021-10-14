import { createContext, useContext, useEffect, useState } from 'react';
import {productsApi, cloudinaryApi} from '../utils/api'
import { AuthContext } from './AuthContextProvider'
import { notify } from '../utils/notify'



export const ProductsContext = createContext();


export const ProductsContextProvider = ({children})=>{

  const {userToken} = useContext(AuthContext)  

  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [dataLoading, setDataLoading] = useState(false);


  const fetchData = async()=>{    
    const {data} = await productsApi.get('/products')
    setProducts(data)    
  }

  const fetchCategories = async()=>{
    const {data} = await productsApi.get('/categories')
    setCategories(data)      
  }

  const deleteImage= async(image_id) => {
    await cloudinaryApi.delete(`/api/images/${image_id}`)    
  }
  
  const createProduct = async(product, base64EncodedImage)=>{

    setDataLoading(true)
    let cloudinaryImageId

    try {

      const uploadImage = () => {
          return fetch('http://localhost:3001/api/upload', {
              method: 'POST',
              body: JSON.stringify({ data: base64EncodedImage }),
              headers: { 'Content-Type': 'application/json' },
          })
          .then((response) => response.json())
          .then((data) => cloudinaryImageId = data.public_id)        
      }
      await uploadImage(); 

      product.image = cloudinaryImageId        

      const {data} = await productsApi.post('/products', product, {
        headers: {
          'authorization': userToken 
        }              
      })

      setProducts([...products, data])      
      notify("Product created", true)      
      setDataLoading(false)    
            
        
    } catch (err) {        
        deleteImage(cloudinaryImageId) 
        err.response.data.code ===11000 ? notify('Title repeated', false)
          : notify(err.response.statusText, false)          
        setDataLoading(false) 
    }

  }

  const deleteProduct = async (id, image_id)=>{
    try {      
      await deleteImage(image_id);  

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
      {return {... product, title: titleEdited,
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
    dataLoading,     
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