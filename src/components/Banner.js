import React, {useContext } from 'react'
import { Row } from 'react-bootstrap';
import { ProductsContext } from '../context/ProductsContext';
import { CardsHome } from './CardsHome';

export const Banner = () => {

    const { products} = useContext(ProductsContext)

   if(!products) return <h3>Loading . . . </h3>

    return (                
        <Row>  
            {                
                products.map(({ _id, title, price, image }) =>  
                <CardsHome
                 key={_id}
                 cardKey={_id} 
                 id={_id}
                 cardTitle={title}
                 cardPrice={price}
                 cardImage={image}
                 variant={'primary'} text={'Ver más'} color='blue'/>                              
                )
            }        
         </Row> 
        
    )
}
