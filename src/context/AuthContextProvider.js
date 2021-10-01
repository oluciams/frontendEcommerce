import {createContext, useState, useEffect} from 'react';
import {loginApi} from '../utils/api'
import {useLocalStorage} from '../customHooks/useLocalStorage'
import { notify } from '../utils/notify';


export const AuthContext = createContext();
  
export const AuthContextProvider = ({ children }) => {

  const hookStorage = useLocalStorage()

  let token = localStorage.getItem('token') 

  const [userToken, setUserToken] = useState(token);
  const [user, setUser] = useState(); 

  const saveFormData = (values) =>{
    setUser(values)
  }

  useEffect(async () => {  
     if (user){
       try{
         const apiData= await loginApi.post('/login', user)          
         const {data} = apiData            
         setUserToken(data)    
         hookStorage.setItem('token', data)  
         notify("Login successfull", true)          
       }  
       catch (error) {           
         notify("Something gone wrong", false)   
       }          
     }
    
  },[user]);

  
  useEffect(() => { 
    if (token)
    setUserToken(token)
  }, []);

  // const logout= ()=> {
  //   localStorage.clear('token')
  //   setUserToken(false)

  // }
  
  const value = {
    saveFormData,
    userToken
    
  }

  

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    
  )
}

