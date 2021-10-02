import { useContext } from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';

export const Header = () => {

  const {logout, userToken} = useContext(AuthContext)
   
    return (      
      <> 
        {userToken? 

          <div>
            <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand>Ecommerce</Navbar.Brand>
                <Nav>            
                  <NavLink className="mx-2 btn btn-sm btn-primary" exact activeClassName="active" to='/' >Home </NavLink>                             
                  <NavLink className="mx-2 btn btn-sm btn-warning"activeClassName="active" to='/products'>Admin</NavLink>     
                  <NavLink className="mx-2 btn btn-sm btn-secondary" size='sm' activeClassName="active" onClick={()=>logout()} to='/'>Logout</NavLink>                     
                </Nav>      
            </Container>
            </Navbar>
          </div> 
        
        : 

          <div>
          <Navbar bg="light" variant="light">
              <Container>
                <Navbar.Brand>Ecommerce</Navbar.Brand>
                  <Nav>            
                    <NavLink className="mx-2 btn btn-sm btn-primary" exact activeClassName="active" to='/' >Home </NavLink>           
                    <NavLink className="mx-2 btn btn-sm btn-primary" exact activeClassName="active" to='/login'>Login</NavLink>                      
                    <NavLink className="mx-2 btn btn-sm btn-primary" exact activeClassName="active" to='/register'>Register</NavLink>                  
                  </Nav>      
              </Container>
            </Navbar>
          </div>   
        
        }
      </>
    )
}


