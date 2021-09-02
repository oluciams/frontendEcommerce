import React from 'react';
import { Redirect, Route } from 'react-router-dom';

//simulando autenticacion
let auth;
 auth=null;    // en esta parte se puede colocar la logica de mi autenticacion
 auth=true;

export const PrivateRoute = ({component: Component, ...rest})=>{

  return(

    <Route {...rest}>{auth? <Component/>:<Redirect to='/login'/>}</Route>    
  )
}

