export const useLocalStorage =()=>{
  
  const setItem = (key, value)=>{
    localStorage.setItem(key, value)
  }

  const getItem = (key)=>{
    localStorage.getItem(key)
  }

  const removeItem = (key)=>{
    localStorage.removeItem(key)
  }

  const resetStorage = ()=>{
    localStorage.clear()
  }

  return{
    setItem,
    getItem,
    removeItem,
    resetStorage
  }
}