import React from 'react';
import { Button as Btn } from './Button';
import {IntlProvider, FormattedNumber} from 'react-intl'



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
        <p className="card-text">
        <IntlProvider locale="en-US" defaultLocale="en">      
        <br />
        <FormattedNumber value={cardValue} style="currency" currency="USD" />      
    </IntlProvider>  
        {/* <FormattedNumber value={cardValue} style="currency" currency="EUR" /> */}
          {/* {cardValue} */}
          </p>
        <Btn variant={variant} text={text} color={color} />  
      </div>
    </div>
    )

}

