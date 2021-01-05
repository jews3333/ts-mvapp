import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Movie, View } from './index';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Routes(){
    return (
        <Router>
            <Header/>
            <div id="content">
                <Switch>
                    <Route exact path="/:id/:seq" component={View} />
                    <Route exact path="/" component={Movie} />
                    <Redirect path="*" to="/" />
                </Switch>
            </div>
            <Footer/>
        </Router>
    )
}

export default Routes;