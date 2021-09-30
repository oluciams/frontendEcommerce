import { Container} from 'react-bootstrap';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink} from 'react-router-dom'

export const Header = () => {
   
    return (
    <>       
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Ecommerce</Navbar.Brand>
            <Nav className="">                       
              <NavLink className="mx-2" exact activeClassName="active" to='/' >Home </NavLink>                      
              <NavLink className="mx-2"exact activeClassName="active" to='/login'>Login</NavLink>                      
              <NavLink className="mx-2"exact activeClassName="active" to='/register'>Register</NavLink>                        
              <NavLink className="mx-2"activeClassName="active" to='/products'>Products</NavLink>                      
              <NavLink className="mx-2"exact activeClassName="active" to='/logout'>Logout</NavLink>                
              {/* <Link to='/acerca'>Acerca</Link>
              <Link to='/products'>Productos</Link>
              <Link to= '/dashboard'>Dashboard</Link>        */}
            </Nav>
        </Container>
      </Navbar>
    </>
    )
}
