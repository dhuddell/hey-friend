import React from 'react';
import { useHistory } from 'react-router-dom';

const getRandom = (min, max) => {
  const float = Math.random() * (max - min) + min;
  return Math.ceil(float);
};

const renderBill = (width, height) => (
  <img src={`https://www.fillmurray.com/${width}/${height}`} />
);

const AppError = ({ error }) => {
  const width = getRandom(210, 340);
  const height = getRandom(200, 400);
  const history = useHistory();

  const logOut = () => {
    if (window.localStorage) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('username');
    }
    return history.push('/login');
  };

  if (error.networkError) {
    console.log('Network Errors>>>>>>>>>>');
    console.log(JSON.stringify(error.networkError));
    console.log('<<<<<<<<<<Network Errors');

    if (error.networkError.statusCode >= 500) {
      return (
        <div className="content-wrapper">
          <h3>I&apos;ve got 500 errors, and this one</h3>
          <h2>Bill Murray.</h2>
          {renderBill(width, height)}
        </div>
      );
    }

    if ([400, 401, 403, 404].includes(error.networkError.statusCode)) {
      return (
        <div className="content-wrapper">
          <h3>{`You're lost bub, ${error.networkError.statusCode}`}</h3>
          <h2>Bill Murray.</h2>
          {renderBill(width, height)}
          <div>
            <button
              className="btn btn-primary"
              onClick={logOut}
            >
              {'Try logging out and logging in'}
            </button>
          </div>
        </div>
      );
    }
  }

  if (error.graphQLErrors.length) {
    console.log('GraphQL Errors>>>>>>>>>>');
    console.log(JSON.stringify(error.graphQLErrors[0]));
    console.log('<<<<<<<<<<GraphQL Errors');

    return (
      <div className="content-wrapper">
        <h3>This is an error, I blame Dan</h3>
        <h2>Bill Murray.</h2>
        {renderBill(width, height)}
        <div>
          <button
            className="btn btn-primary"
            onClick={logOut}
          >
            {'Try logging out and logging in'}
          </button>
        </div>
      </div>
    );
  }

  //  hilarious huge pink JSON blob bc I don't know how someone got here
  console.log('Unknown Errors>>>>>>>>>>');
  console.log(JSON.stringify(error));
  console.log('<<<<<<<<<<GraphQL Unknown');

  return (
    <div>
      <h1 style={{ color: 'pink' }}>Errors ¯\_(ツ)_/¯ Errors</h1>
      <h1 style={{ color: 'pink' }}>{JSON.stringify(error)}</h1>
    </div>
  );
};

export default AppError;
