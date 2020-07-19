import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ToastProvider } from 'react-toast-notifications';
import client from './graphql/apollo-client';
import history from './history';
import registerServiceWorker from './register-service-worker';
import './main.scss';
import { setUserCookie } from './utils';
import {
  Home,
  FriendPage,
  Settings,
  Registration,
  Header,
  NavMenu,
  Login,
  AddFriend,
  Bacon,
} from './components';
import { ModalProvider, ModalRoot } from './modal-context';

const App = () => {
  setUserCookie();
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <ToastProvider>
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
                <Route path="/bacon" component={Bacon} />
                <Route path="/add-friend" component={AddFriend} />
                <Route path="/:username/friends/:friendId" component={FriendPage} />
              </Switch>
            </div>
          </Router>
        </ToastProvider>
      </ModalProvider>
    </ApolloProvider>
  );
};

render(<App />, document.getElementById('app'));
registerServiceWorker();
