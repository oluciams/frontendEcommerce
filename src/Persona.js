import React from 'react'
import { Edad } from './Edad'
import Name from './Name'

export const Persona = ({ nameProp, ageProp }) => {

  return (
    <>
      <Name name={nameProp} />
      <Edad edad={ageProp} />
    </>
  )
}