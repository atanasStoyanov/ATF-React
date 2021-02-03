import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';

const App = props => {

  let routes = (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/sign-in' component={SignIn} />
      <Route path='/sign-up' component={ SignUp} />
      <Redirect to='/' />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
      <Route path='/' exact component={Home} />
      {/* <Route path='/logout' component={Logout} />
      <Route path='/players' component={Players} />
      <Route path='/rankings' component={Rankings} /> */}
      <Redirect to='/' />
    </Switch>
    )
  }

  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
