import React from 'react';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Dashboard  from './Views/Dashboard'
import {Switch, Redirect} from 'react-router-dom';
import RouteNoAuth from './Components/RouteNoAuth/RouteNoAuth';
import RouteAuth from './Components/Route/Route'
import MainLayout from "./Layouts";
import Create from "./Views/Create";

export const Routes = () => {
    return (
            <Switch>
                <Redirect exact from='/' to='/Dashboard' />
                <RouteNoAuth exact path="/login" component={LoginPage} layout={MainLayout} />
                <RouteNoAuth exact path="/register" component={RegisterPage} layout={MainLayout}/>
                <RouteAuth exact path="/Dashboard" component={Dashboard} layout={MainLayout}/>
                <RouteAuth exact path="/Create" component={Create} layout={MainLayout}/>
            </Switch>
    );
};