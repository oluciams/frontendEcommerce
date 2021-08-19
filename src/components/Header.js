import { Container} from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';

export const Header = () => {
   
    return (
    <>
        <Navbar bg="secondary">
            <Container>
            <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Container>
        </Navbar>
    </>
    )
}
