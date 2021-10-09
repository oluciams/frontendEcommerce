import React from 'react';
import { Container } from 'react-bootstrap';
import {Banner} from '../components/Banner';

export const Home = () => {
   
return (    
  <Container fluid>  
    <h3 className='text-center mt-2'>Welcome</h3>                  
    <Banner/>                                 
  </Container>      
  )
}
