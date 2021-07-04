import React from 'react'
import { BrowserRouter as Router, Route,  NavLink, Switch } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <h2>Mis apuntes</h2>

        <NavLink exact activeClassName="active" to="/" >Home</NavLink>
        <NavLink exact activeClassName="active" to="/" >About</NavLink>
        <NavLink  activeClassName="active" to="/DataAnalytics" >Data Analytics</NavLink>
        <NavLink  activeClassName="active" to="/DataScience" >Data Science</NavLink>
        <NavLink  activeClassName="active" to="/DataEngineer" >Data Engineer</NavLink>
      
        <hr />

        <Switch>
          <Route exact path="/"  />
          <Route exact path="/"  />
          <Route exact path="/"  />
          <Route exact path="/"  />
        </Switch>
      </div>
    </Router>
    );
}

export default App;
