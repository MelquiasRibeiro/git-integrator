import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Repo from './pages/repos';

export default function routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/repos" component={Repo} />
        </Switch>
    );
}
