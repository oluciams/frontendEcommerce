import { Container, Row, Col } from 'react-bootstrap';
import {Header} from './Header'
import { Hero} from './Hero';
import {Footer} from './Footer'
import {Banner} from './Banner'


export const Page = () => {
   
return (
    <>
      <Container>
      <Header/>     
        <Hero variant={'secondary'} text={'login'} color='black'/>         
           <Banner/>       
        <Footer/>               
      </Container>

     
    </>
)
}
