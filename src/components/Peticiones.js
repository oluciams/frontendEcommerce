import React from 'react';

export const Peticiones = ()=>{


  const getAll = async () => {
    try {
      let res = await axios.get("http://localhost:5555/santos"),
        json = await res.data;
  
      console.log(json);
  
      
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";    
        `<p>Error ${err.status}: ${message}</p>`    
    }
  }

  
  return(
    <>
    </>

  )
}

