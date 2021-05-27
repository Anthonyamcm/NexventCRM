import React from 'react';
import { Router } from 'react-router-dom';
import { Routes } from './Routes';
import { AuthProvider } from './Providers/AuthProvider';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

function App() {

  return (
      <React.Fragment>
        <Router history={browserHistory}>
            <AuthProvider>
              <Routes />
            </AuthProvider>
        </Router>
      </React.Fragment>
  );
}

export default App;
