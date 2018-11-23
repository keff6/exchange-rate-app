import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import ExchangeIndex from './../ExchangeIndex/ExchangeIndex';
import About from './../About/About';

class Router extends Component {
  render(){
    return(
      <Switch>
          <Route exact path={routes.ROOT} component={ExchangeIndex} />
          <Route exact path={routes.ABOUT} component={About} />
      </Switch>
    )
  }
}

export default Router;