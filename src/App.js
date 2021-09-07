import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoutes } from './router/AppRoutes';
import { AuthContextProvider } from './context/AuthContextProvider';
import { ProductsContextProvider } from './context/ProductsContext';



export const App = ()=>{
  return (
    <>
      <AuthContextProvider>
        <ProductsContextProvider>
          <AppRoutes/>          
        </ProductsContextProvider>
      </AuthContextProvider>
    </>
   )
}




