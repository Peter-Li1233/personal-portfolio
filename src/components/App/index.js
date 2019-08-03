import React from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';

import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <Navigation />
        <hr />
        <Route exact={true} path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    </Router>
);

export default App;