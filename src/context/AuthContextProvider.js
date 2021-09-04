import {createContext, useState, useEffect} from 'react';
const axios = require ('axios').default;


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
    try {
      const apiData= await axios.post('http://localhost:3001/login', user)
      const {data} = apiData
      console.log('token api')
      console.log(data.token);
      setUserToken(data.token)
      localStorage.setItem('token', data.token);
  
    } catch (error) {
      const {message} = error.response.data
      console.log(message);      
    }          
    
  }, [user]);

  useEffect(() => {
    if (token)
    setUserToken(token)
  }, []);

  const logout= ()=> {
    localStorage.clear('token')
    setUserToken(false)

  }
  
  const value = {
    saveFormData,
    userToken,
    logout
  }

  

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    
  )
}

