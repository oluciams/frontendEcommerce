import React, { useState, useEffect } from 'react'
import { Row} from 'react-bootstrap';
import { Cards } from './Cards';


export const Banner = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('Ejecuta use effect')
        fetch(`http://localhost:3001/products`)
            .then(response => response.json())
            .then(data => {
                console.log('ejecucion del fetch')
                setProducts(data)   
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div> 
        <Row>                 
            {
                products.map(({ id, title, value, image }) => 
                <Cards
                 cardKey={id}
                 cardTitle={title}
                 cardValue={value}
                 cardImage={image}
                 variant={'primary'} text={'Ver más'} color='blue'
                />)
            }
         </Row> 
        </div>
    )
}
