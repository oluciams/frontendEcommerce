import React from 'react';
import { Button as Btn } from './Button';
import {IntlProvider, FormattedNumber} from 'react-intl'
import { Button } from 'react-bootstrap';

export const Cards = ({
    cardKey,
    id,
    cardTitle,
    cardPrice,
    cardImage,    
    variant,
    text,
    color,
    deleteProduct, 
    editProduct    
   }) => {
        
    return (
               
    <div className="card mx-auto my-3" key={cardKey} style={{ width: '12rem' }}>
      <img src={cardImage} className="card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>        
        <p className="card-text">
        <IntlProvider locale="en-US" defaultLocale="en">        
        <FormattedNumber value={cardPrice} style="currency" currency="USD" />      
        </IntlProvider>
        </p>                    
        <Btn variant={variant} text={text} color={color} />
        <div className="mt-2">
          <Button variant='danger'size='sm'onClick={()=>deleteProduct(id)}>Delete</Button>          
          <Button className="m-2" variant='primary' size='sm' onClick={()=>editProduct(id)}>Edit</Button>      
        </div>  
      </div>
    </div>
    )

}

