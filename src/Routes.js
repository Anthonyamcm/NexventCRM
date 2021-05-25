import React from 'react';
import { LoginPage } from './Pages/Login';
import { RegisterPage } from './Pages/Register';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/Register" component={RegisterPage} />
            </Switch>
        </div>
    );
};