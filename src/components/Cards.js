import React from 'react'
import {IntlProvider, FormattedNumber} from 'react-intl'
import { Button } from 'react-bootstrap'
import { Image } from 'cloudinary-react'

export const Cards = ({
    cardKey,
    id,
    cardTitle,
    cardPrice,
    cardImage,      
    deleteProduct, 
    editProduct    
   }) => {
        
    return (
               
    <div className="card mx-auto my-3" key={cardKey} style={{ width: '12rem' }}>
      {/* <img src={cardImage} className="card-img-top" alt=""></img> */}
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
        <div className="mt-2">
          <Button variant='danger'size='sm'onClick={()=>deleteProduct(id)}>Delete</Button>          
          <Button className="m-2" variant='primary' size='sm' onClick={()=>editProduct(id)}>Edit</Button>      
        </div>  
      </div>
    </div>
    )

}

