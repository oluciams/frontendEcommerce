import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export const PrivateRoute = ({component: Component, userToken, ...rest})=>{

  return(
    <Route {...rest} render ={props => (
      userToken ? <Component {...props }/> : <Redirect to='/login'/>
    )}/>    
  )
}

