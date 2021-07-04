import React from 'react'
import { BrowserRouter as Router, Route, Link,   NavLink, Switch } from 'react-router-dom'

import './App.css';
import DataAnalytics from './DataAnalytics';
import DataScience from './DataScience';
import DataEngineer from './DataEngineer';
import Dev from './Dev';




function App() {
  return (
    <Router>
      <div className="app">
        <h2>Mis apuntes</h2>

        <Link exact to="/" >Home</Link>
        <NavLink exact activeClassName="active" to="/Dev" >Dev</NavLink>
        <NavLink  activeClassName="active" to="/DataAnalytics" >Data Analytics</NavLink>
        <NavLink  activeClassName="active" to="/DataScience" >Data Science</NavLink>
        <NavLink  activeClassName="active" to="/DataEngineer" >Data Engineer</NavLink>
      
        <hr />

        <Switch>
          <Route exact path="/DataAnalytics" component={DataAnalytics} />
          <Route exact path="/DataScience" component={DataScience} />
          <Route exact path="/DataEngineer" component={DataEngineer} />
          <Route exact path="/Dev" component={Dev} />
        </Switch>
      </div>
    </Router>
    );
}

export default App;
