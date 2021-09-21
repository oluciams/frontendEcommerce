import {createContext, useState, useEffect} from 'react';
import {loginApi} from '../utils/api'
import {useLocalStorage} from '../customHooks/useLocalStorage'


export const AuthContext = createContext();
  
export const AuthContextProvider = ({ children }) => {

  const hookStorage = useLocalStorage()

  let token = localStorage.getItem('token') 
  //let token = hookStorage.getItem('token') 
  //console.log("variable token",token)

  const [userToken, setUserToken] = useState(token);
  const [user, setUser] = useState({});

  
  const saveFormData = (email, password) =>{
    const data = {email, password}
    setUser(data)
  }

  useEffect(async () => {     
    try{
      const apiData= await loginApi.post('/login', user)     
      const {data} = apiData
      console.log ('respuesta token desde la api', data)      
      setUserToken(data)
      hookStorage.setItem('token', data)       
    }  
    catch (error) {    
      console.log(error);      
    }          
    
  }, [user]);

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

