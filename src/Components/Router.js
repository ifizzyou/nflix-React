import React from 'react';
import {HashRouter as Router,Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";


const Routing = () => (
  <Router>
    <Switch>
    <Route path = '/' exact component ={Home} />
    <Route path = '/tv' exact component ={TV} />
    <Route path = "/tv/popular" render = {() => <h1>Popular</h1>} />
    <Route path = '/search' component ={Search} />
    <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default Routing;