import React from 'react';
import { Button as Btn } from './Button';
import {IntlProvider, FormattedNumber} from 'react-intl'
import { Image } from 'cloudinary-react'

export const CardsHome = ({
    cardKey,    
    cardTitle,
    cardPrice,
    cardImage,    
    variant,
    text,
    color    
    
   }) => { 
     
    return (               
      <div className="card mx-auto my-3" key={cardKey} style={{ width: '12rem' }}>        
        <Image
        className="card-img-top mt-2"        
        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}                            
        publicId={cardImage}
        width="150"
        height="150"
        crop="scale"
        />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>        
          <p className="card-text">
          <IntlProvider locale="en-US" defaultLocale="en">        
          <FormattedNumber value={cardPrice} style="currency" currency="USD" />      
          </IntlProvider>
          </p>                    
          <Btn variant={variant} text={text} color={color} />           
        </div>
      </div>
    )
}

