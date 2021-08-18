import React, {useState} from 'react'
import './counter.style.css'

export const Counter = () => {
    
    const [value, setValue] = useState(4);

    /*
    const useStateMio = () => {
      return ['a',function mostrar(){console.log('funcion mostrar llamada');}]
    }
  
    const [elementoA, elementoB]=useStateMio()
  console.log(elementoA);
  elementoB()
  */
    
    const add = () => {
      setValue(value => value + 1)
    };

    const rest = () => {
        setValue(value => value - 1)
      };
    
    return (
      <div>
        {value}
        <button onClick={add} className='button' >add</button>
        <button onClick={rest} className='button' >Rest</button>
      </div>
    )
  }

  //this.state