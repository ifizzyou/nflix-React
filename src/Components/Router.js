import React from 'react';
import{HashRouter as Router,Route} from "react-router-dom";
import Home from "Components/Home";

export default () => (
  <Router>
    <Route path = '/' exact component ={Home} />
  </Router>
)