import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { SchemaLink } from 'apollo-link-schema';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './main.scss';
import Home from './home';
import { Friend, Settings } from './components';

import schema from './graphql/schema';

const graphqlClient = new ApolloClient({
  cache: new InMemoryCache().restore(global.__APOLLO_STATE__), // eslint-disable-line no-underscore-dangle
  link: new SchemaLink({ schema }),
});


// const client = new ApolloClient();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={graphqlClient}>
          <div className="app-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/settings" component={Settings} />
              <Route path="/contacts/:contactId" component={Friend} />
            </Switch>
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('app'));
