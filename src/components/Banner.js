import React, {useContext } from 'react'
import { Row } from 'react-bootstrap';
import { ProductsContext } from '../context/ProductsContext';
import { Cards } from './Cards';

export const Banner = (editProduct) => {

    const { products, deleteProduct} = useContext(ProductsContext)

   if(!products) return <h3>Loading . . . </h3>

    return (                
        <Row>  
            {                
                // products &&
                products.map(({ _id, title, price, image }) =>  
                <Cards
                 key={_id}
                 cardKey={_id} 
                 id={_id}
                 cardTitle={title}
                 cardPrice={price}
                 cardImage={image}
                 variant={'primary'} text={'Ver más'} color='blue'
                 deleteProduct={deleteProduct}
                 editProduct={editProduct}/>               
                )
            }        
         </Row> 
        
    )
}
