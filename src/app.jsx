import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/apollo-client';

import history from './history';
import './main.scss';
import {
  Home,
  Friend,
  Settings,
  Registration,
  Header,
  NavMenu,
  Login,
} from './components';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter history={history}>
          <div className="app-container">
            <Header />
            <NavMenu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/settings" component={Settings} />
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
              <Route path="/:username/friends/:friendId" component={Friend} />
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
