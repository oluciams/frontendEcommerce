import React from 'react';
import { Button as Btn } from './Button';




export const Cards = ({
    cardKey,
    cardTitle,
    cardValue,
    cardImage,
    text,
    variant,
    color }) => {
    return (
               
    <div className="card mx-auto my-3" key={cardKey} style={{ width: '12rem' }}>
      <img src={cardImage} className="card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardValue}</p>
        <Btn variant={variant} text={text} color={color} />  
      </div>
    </div>
    )

}

