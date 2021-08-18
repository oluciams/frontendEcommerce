import React from 'react';

import {Counter} from './Counter';
import {Edad} from './Edad';
import {Persona} from './Persona';
import './app.style.css'



export const App = ()=>{

  const nameValue = 'pepe'
  const ageValue = 15

  return (
    <>
    <h2 style={{backgroundColor:'red', fontSize:40, paddind: '20px 20px 20px 20px'}}>Hello world</h2>

    {/* <Persona nameProp={nameValue} ageProp={ageValue} cualquierCosa ={'cualquier Valor'}/>
    */}

    <Edad edad={30}/>   
    <Counter/>
  
    </>
   )
}




