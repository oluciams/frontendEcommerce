import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoutes } from './router/AppRoutes';
import { AuthContextProvider } from './context/AuthContextProvider';


export const App = ()=>{
  return (
    <>
      <AuthContextProvider>
        <AppRoutes/>          
      </AuthContextProvider>
    </>
   )
}




