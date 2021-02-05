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
