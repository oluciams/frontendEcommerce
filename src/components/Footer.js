import { Container} from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';
import './footer.css';

export const Footer = () => {
   
    return (
        <>
        <Navbar className="footer" bg="light">
            <Container>
            <Navbar.Brand>Footer</Navbar.Brand>
            </Container>
        </Navbar>    
  </>
    
    )
}