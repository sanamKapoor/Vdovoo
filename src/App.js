import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Context from './Context';

const Login = React.lazy(() => import('./components/Login'));
const Error = React.lazy(() => import('./components/Error'));
const Home = React.lazy(() => import('./components/Home'));
const ProfileData = React.lazy(() => import('./components/ProfileData'));


function App() {
  return (
    <Router>
      <Suspense fallback={
      <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
         </div>
        </div>
      }>
        <Context>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile/:query" component={ProfileData} />
            <Route path="*" component={Error} />
          </Switch>
        </Context>
      </Suspense>
    </Router>
  );
}

export default App;
