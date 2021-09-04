import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';

export const Logout = ()=> {

  const {logout} = useContext(AuthContext)

  return(
    <>

    {/* logout()
    <Redirect to='/login'/> */}
    <h3>Logout</h3>

    </>
  )
}