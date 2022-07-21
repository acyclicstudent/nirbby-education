import React, { useState } from 'react';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Auth from './routes/Auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Switch>
      {
        isLoggedIn ? (
            <Route exact path="/" component={Home} />
        ) : (
          <Route exact path="/" component={Auth} />
        )
      }
    </Switch>
  );
}

export default App;
