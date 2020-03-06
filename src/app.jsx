import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
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
import { ModalProvider, ModalRoot } from './modal-context';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ModalProvider>
          <ModalRoot />
          <Router history={history}>
            <div className="app-container">
              <Header />
              <NavMenu />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/settings" component={Settings} />
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />
                <Route path="/:username/friends/:name" component={Friend} />
              </Switch>
            </div>
          </Router>
        </ModalProvider>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
