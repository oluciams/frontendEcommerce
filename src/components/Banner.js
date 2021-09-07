import React, { useState, useEffect, useContext } from 'react'
import { Row } from 'react-bootstrap';
import { ProductsContext } from '../context/ProductsContext';
import { Cards } from './Cards';



export const Banner = () => {

   const {products} = useContext(ProductsContext)

   if(!products) return <h3>Loading . . . </h3>

    return (                
        <Row>                           
            {
                // products &&
                products.map(({ id, title, value, image }) => 
                <Cards
                 cardKey={id}
                 cardTitle={title}
                 cardValue={value}
                 cardImage={image}
                 variant={'primary'} text={'Ver más'} color='blue'/>
                )
            }            
         </Row> 
        
    )
}
