import React from 'react';

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
import { Dashboard } from '../components/Dashboard';
import { Banner } from '../components/Banner';

  
  export const AppRoutes = () => {
    return (
     
      <Router>
        <div>
            <Header/>            
            <Switch>
              <Route path="/" exact component={Home} /> 
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />             
              <Route path='*' component={NotFound}/>
              {/* <PrivateRoute exact path='/deshboard' component={Dashboard}/>               */}
              {/* <Route path='/products' component={Banner}/> */}
            </Switch>
            <Footer/>
        </div>
      </Router>
    );
  }  
  

  
  