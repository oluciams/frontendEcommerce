import {createContext, useState, useEffect} from 'react';
import {loginApi} from '../utils/api'



export const AuthContext = createContext();

  
export const AuthContextProvider = ({ children }) => {

  const [userToken, setUserToken] = useState(false);
  const [user, setUser] = useState({});

  const token = localStorage.getItem('token')
  
  const saveFormData = (email, password) =>{
    const data = {email, password}
    setUser(data)
  }


  useEffect(async () => {     
    try{
      const apiData= await loginApi.post('/login', user)
      const {data} = apiData
      console.log('token api')
      console.log(data.token);
      setUserToken(data.token)
      localStorage.setItem('token', data.token);//se debe guardar como un string

    }  
     catch (error) {
      // const {message} = error.response.data
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

