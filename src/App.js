import React, {useState} from 'react';

import UserContext from './Context';

const App = props => {

  const [loggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  const logIn = user => {
    setLoggedIn(true);
    setUser(user);
  }

  const logOut = () => {
    document.cookie = "x-auth-token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"
    setLoggedIn(false);
    setUser(null);
  }

  return (
    <UserContext.Provider value={{
      loggedIn,
      user,
      logIn,
      logOut
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default App;
