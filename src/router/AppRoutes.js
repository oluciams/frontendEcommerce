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

  
  export const AppRoutes = () => {
    return (
      <Router>
        <div>
            <Header/>            
            <Switch>
              <Route exact path={"/login"}>
                <Login/>                
              </Route>
              <Route exact path={"/register"} component={Register}/>          
              <Route exact path={"/"}>
                <Home/>
              </Route>
            </Switch>
            <Footer/>
        </div>
      </Router>
    );
  }  
  

  
  