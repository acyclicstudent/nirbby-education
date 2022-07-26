import React, { useState } from 'react';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Auth from './modules/shared/routes/Auth';
import CoachesModule from './modules/coaches';
import InstitutesModule from './modules/institutes';
import DefaultModule from './modules/default';
import Landing from './routes/Landing';
import Rewards from './modules/default/routes/Rewards';

function App() {
  return (
    <Switch>
      <Route path="/app" component={DefaultModule} />
      <Route path="/coaches" component={CoachesModule} />
      <Route path="/institutes" component={InstitutesModule} /> 
      <Route exact path="/" component={Landing} />
      
    </Switch>
  );
}

export default App;
