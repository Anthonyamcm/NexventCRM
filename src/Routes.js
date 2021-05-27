import React from 'react';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import {Switch} from 'react-router-dom';
import RouteNoAuth from './Components/RouteNoAuth/RouteNoAuth';
import MainLayout from "./Layouts";

export const Routes = () => {
    return (
        <div>
            <Switch>
                <RouteNoAuth exact path="/" component={LoginPage} layout={MainLayout} />
                <RouteNoAuth exact path="/Register" component={RegisterPage} layout={MainLayout}/>
            </Switch>
        </div>
    );
};