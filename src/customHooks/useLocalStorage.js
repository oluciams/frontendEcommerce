export const useLocalStorage =()=>{
  
  const setItem = (key, value)=>{
    localStorage.setItem(key, value)
  }

  const removeItem = (key)=>{
    localStorage.removeItem(key)
  }

  const resetStorage = ()=>{
    localStorage.clear()
  }

  return{
    setItem,
    removeItem,
    resetStorage
  }
}