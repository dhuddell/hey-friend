import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ToastProvider } from 'react-toast-notifications';
import { Steps } from 'intro.js-react';
import client from './graphql/apollo-client';
import history from './history';
import introJs from 'intro.js';
import registerServiceWorker from './register-service-worker';
import './main.scss';
import {
  Home,
  FriendPage,
  Settings,
  Registration,
  Header,
  NavMenu,
  Login,
  AddFriend,
} from './components';
import { ModalProvider, ModalRoot } from './modal-context';

const App = () => {
  introJs().start();
  const [introState, setIntroState] = useState({
    stepsEnabled: true,
    initialStep: 0,
    steps: [
      { element: '.hello', intro: 'Hello step' },
      { element: '.world', intro: 'World step' },
    ],
  });


  const onExit = () => {
    setIntroState(() => ({ stepsEnabled: false }));
  };

  const toggleSteps = () => {
    setIntroState((prevState) => ({ stepsEnabled: !prevState.stepsEnabled }));
  };

  const {
    stepsEnabled,
    steps,
    initialStep,
  } = introState;

  console.log('shutup');
  console.log(initialStep);
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <ToastProvider>
          <ModalRoot />
          <Router history={history}>
            <div data-step="1"
              data-intro="This is a tooltip!"
              className="app-container"
            >
              <Steps
                enabled={stepsEnabled}
                steps={steps}
                initialStep={initialStep}
                onExit={onExit}
              />
              <Header />
              <NavMenu />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/settings" component={Settings} />
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />
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
