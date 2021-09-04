import React, { useContext } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route    
  } from "react-router-dom";

import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import {Footer} from '../components/Footer';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NotFound } from '../pages/NotFound';
import { PrivateRoute } from '../components/PrivateRoute';
import { Banner } from '../components/Banner';
import { Products } from '../pages/Products';
import { AuthContext } from '../context/AuthContextProvider';
import { Logout } from '../components/Logout';

  
  export const AppRoutes = () => {

    const {userToken,logout } = useContext(AuthContext)

    return (
     
      <Router>
        <div>
            <Header/>            
            <Switch>
              <Route path="/" exact component={Home} /> 
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute exact path='/products' component={Products} userToken={userToken}/>
              <Route path="/logout" component={Logout} logout={logout}  />               
              {/* <Route path="/products" component={Products} />  */}
              <Route path='*' component={NotFound}/>             
              {/* <Route path='/products' component={Banner}/> */}
            </Switch>
            <Footer/>
        </div>
      </Router>
    );
  }  
  

  
  