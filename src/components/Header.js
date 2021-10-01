import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink} from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider';

export const Header = () => {

  const {logout} = useContext(AuthContext)
   
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
              <Button className="m-2" variant='primary' size='sm' onClick={()=>logout()}>Logout</Button>             
            </Nav>
        </Container>
      </Navbar>
    </>
    )
}
