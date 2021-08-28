import { Container} from 'react-bootstrap';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export const Header = () => {
   
    return (
    <>       
      <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand>Ecommerce</Navbar.Brand>
            <Nav className="">
              <Nav.Link>              
                <NavLink exact activeClassName="active" to='/' >Home </NavLink>              
              </Nav.Link>    
              <Nav.Link>              
                <NavLink exact activeClassName="active" to='/login'>Login</NavLink>
              </Nav.Link>        
            </Nav>
          </Container>
      </Navbar>
    </>
    )
}
