import {createContext, useState, useEffect} from 'react';
import {loginApi} from '../utils/api'
import {useLocalStorage} from '../customHooks/useLocalStorage'
import { notify } from '../utils/notify';
import { Redirect } from 'react-router-dom';

export const AuthContext = createContext();
  
export const AuthContextProvider = ({ children }) => {

  const hookStorage = useLocalStorage()
  let token = localStorage.getItem('token') 
 
  const [userToken, setUserToken] = useState(token);
  const [user, setUser] = useState(); 
  const [redirect, setRedirect] = useState();   

  const saveFormData = (values) =>{
    setUser(values)
  }

  const logout= ()=> {
    localStorage.clear('token')
    setUserToken(false)  
    return <Redirect to="/"/> 
  }

  const resetRedirect = (values) =>{
    setRedirect(false)
  } 

  const handleLogin = async()=>{ 
    
    try{
      const apiData= await loginApi.post('/login', user)     
      const {data} = apiData            
      setUserToken(data)    
      hookStorage.setItem('token', data)  
      notify("Login successfull", true) 
      setTimeout(() => {
        setRedirect(true)
        }, 2000);       
    }
    catch (error) {                  
         notify(error.response.data.message, false) 
    }         
    
  }        

  useEffect(() => {  
     if (user){
      handleLogin()       
     }

  },[user]);
  
  useEffect(() => { 
    if (token)
    setUserToken(token)
  }, []);
  
  const value = {
    saveFormData,
    userToken,
    logout, 
    redirect,
    handleLogin,
    resetRedirect  
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>    
  )
}

