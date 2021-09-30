import React, { useContext } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route    
    //Redirect
  } from "react-router-dom";

import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import {Footer} from '../components/Footer';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { PrivateRoute } from '../components/PrivateRoute';
import { Products } from '../pages/Products';
import { AuthContext } from '../context/AuthContextProvider';
import { Logout } from '../components/Logout';
import { RegisterForm } from '../components/RegisterForm';

  
  export const AppRoutes = () => {

    const {userToken,logout } = useContext(AuthContext)

    return (     
      <Router>
        <div>
            <Header/>            
            <Switch>
              <Route path="/" exact component={Home} /> 
              <Route path="/register" component={RegisterForm} />              
              <Route path="/login" component={Login} />
              <PrivateRoute exact path='/products' component={Products} userToken={userToken}/>
              <Route path="/logout" component={Logout} logout={logout}  />               
              {/* <Route path="/products" component={Products} />  */}
              {/* <Route path='/products' component={Banner}/> */}
              <Route path='*' component={NotFound}/>             
            </Switch>
            <Footer/>
        </div>
      </Router>
    );
  }  
  

  
  