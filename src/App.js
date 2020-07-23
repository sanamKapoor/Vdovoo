import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Error from './components/Error';
import Home from './components/Home';
import Context from './Context';
import ProfileData from './components/ProfileData';

function App() {
  return (
    <Router>
      <Context>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile/:query" component={ProfileData} />
        <Route path="*" component={Error} />
      </Switch>
      </Context>
    </Router>
  );
}

export default App;
