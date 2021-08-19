import { Container} from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';

export const Footer = () => {
   
    return (
    <>
        <Navbar bg="secondary">
            <Container>
            <Navbar.Brand href="#home">Footer</Navbar.Brand>
            </Container>
        </Navbar>
    </>
    )
}