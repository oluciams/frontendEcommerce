import { Container, Row, Col } from 'react-bootstrap';
import {Header} from './Header'
import { Hero} from './Hero';
import { Cards} from './Cards';
import {Footer} from './Footer'


export const Page = () => {
   
return (
    <>
      <Container>
        <Header/>            
        <Hero variant={'secondary'} text={'login'} color='black'/> 
        <Row>
            <Col>
                <Cards cardTitle={'Card # 1'} variant={'primary'} text={'Ver más'} color='blue' />      
            </Col>
            <Col>
                <Cards cardTitle={'Card # 2'} variant={'primary'} text={'Ver más'} color='blue' />      
            </Col>
            <Col>
                <Cards cardTitle={'Card # 3'} variant={'primary'} text={'Ver más'} color='blue' />      
            </Col>   
        </Row> 
        <Footer/>               
      </Container>
    </>
)
}
