import React, { useState } from 'react';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Auth from './modules/shared/routes/Auth';
import CoachesModule from './modules/coaches';
import InstitutesModule from './modules/institutes';
import DefaultModule from './modules/default';
import Landing from './routes/Landing';

function App() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/app" component={DefaultModule} />
      <Route path="/coaches" component={CoachesModule} />
      <Route path="/institutes" component={InstitutesModule} />
    </Switch>
  );
}

export default App;
