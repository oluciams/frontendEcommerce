import React, { useContext } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route    
  } from "react-router-dom";

import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import {Footer} from '../components/Footer';
import { NotFound } from '../pages/NotFound';
import { PrivateRoute } from '../components/PrivateRoute';
import { Products } from '../pages/Products';
import { AuthContext } from '../context/AuthContextProvider';
import { RegisterForm } from '../components/RegisterForm';
import { LoginForm } from '../components/LoginForm';
import Upload from '../Products/components/Upload';

  
  export const AppRoutes = () => {

    const {userToken,logout } = useContext(AuthContext)

    return (     
      <Router>
        <div>
            <Header/>            
            <Switch>
              <Route path="/" exact component={Home} /> 
              <Route path="/register" component={RegisterForm} />              
              <Route path="/login" component={LoginForm} />
              <Route path="/upload" component={Upload} />
              <PrivateRoute exact path='/products' component={Products} userToken={userToken}/>
              <Route path='*' component={NotFound}/>             
            </Switch>
            <Footer/>
        </div>
      </Router>
    );
  }  
  

  
  