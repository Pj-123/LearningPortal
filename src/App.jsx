import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Switch,Route,Redirect } from 'react-router-dom';
const App=()=>
{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/service" component={Service}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect to="/"/>
        </Switch>
        </>

    );
};
export default App;