import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from './Context';
import Aux from './hoc/Auxiliary/Auxiliary';

import Home from './containers/Home/Home';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';

const Navigation = props => {

    const context = useContext(UserContext);

    const {
        loggedIn
    } = context;

        let routes = (
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/sign-in' component={SignIn} />
                <Route path='/sign-up' component={SignUp} />
                <Redirect to='/' />
            </Switch>
        );

    if (loggedIn) {
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
        <Aux>
            { routes }
        </Aux>
    );
}

export default Navigation;