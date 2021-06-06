import React from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import { Switch, Route } from 'react-router';
import Card from './ReactCreditCard/card';
import Home from './components/home';
import CustomCreditCard from './CustomCreditCard/index';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/lib-card' component={Card} />
      <Route exact path='/no-lib-card' component={CustomCreditCard} />
    </Switch>
  );
}

export default App;
