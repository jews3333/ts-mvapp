import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Movie, View } from './index';
import Header from '../components/Header';


function Routes(){
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/:id" component={View} />
                <Route exact path="/" component={Movie} />
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    )
}

export default Routes;