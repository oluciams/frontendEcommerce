import { Container} from 'react-bootstrap';
import { Navbar, Nav} from 'react-bootstrap';

export const Header = () => {
   
    return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
            </Container> 
        </Navbar>
    </>
    )
}
