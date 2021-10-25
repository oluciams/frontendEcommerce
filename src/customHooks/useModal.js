import React, { useState } from 'react';

export const useModal = (initialValue = false)=>{

  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal =()=>setIsOpen(true)
  const closeModal =()=>setIsOpen(false)

  return { //se puede retornar en un arreglo
    isOpen,
    openModal,
    closeModal
  }

}