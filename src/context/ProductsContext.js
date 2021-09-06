import { createContext } from 'react';
import {productsApi} from '../utils/api'

export const ProductsContext = createContext();

export const ProductsContextProvider = ({children})=>{


  const value ={

  }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}