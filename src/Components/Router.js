import React from 'react';
import {BrowserRouter as Router,Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

import Header from "Components/Header";


const Routing = () => (
  <Router>
    <>
    <Header />
    <Switch>
    <Route path = "/" exact component ={Home} />
    <Route path = "/tv" exact component ={TV} />
    {/* <Route path = "/tv/popular" render = {() => <h1>Popular</h1>} /> */}
    <Route path = "/search" component ={Search} />
    <Route path="/movie/:id" component={Detail} />
    <Route path="/show/:id" component={Detail} />
    <Redirect from="*" to="/" />
    </Switch>
    </>
  </Router>
);

export default Routing;