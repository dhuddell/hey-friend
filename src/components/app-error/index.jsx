import React, { Fragment } from 'react';

const getRandom = (min, max) => {
  const float = Math.random() * (max - min) + min;
  return Math.ceil(float);
};

const AppError = ({ error }) => {
  const width = getRandom(210, 340);
  const height = getRandom(200, 400);

  if (error.networkError) {
    console.log('Network Errors>>>>>>>>>>');
    console.log(JSON.stringify(error.networkError));
    console.log('<<<<<<<<<<Network Errors');

    if (error.networkError.statusCode >= 500) {
      return (
        <Fragment>
          <h2>Sorry, you got a 500 error.</h2>
          <h3>Bill Murray.</h3>
          <img src={`https://www.fillmurray.com/${width}/${height}`} />
        </Fragment>
      );
    }

    if (error.networkError.statusCode === 404) {
      return (
        <Fragment>
          <h2>So, I think you&apos;re lost, 404.</h2>
          <h3>Bill Murray.</h3>
          <img src={`https://www.fillmurray.com/${width}/${height}`} />
        </Fragment>
      );
    }
  }

  if (error.graphQLErrors.length) {
    console.log('GraphQL Errors>>>>>>>>>>');
    console.log(JSON.stringify(error.graphQLErrors[0]));
    console.log('<<<<<<<<<<GraphQL Errors');

    return (
      <Fragment>
        <h2>Sorry, Graph Q. L. is acting up.</h2>
        <h3>Bill Murray.</h3>
        <img src={`https://www.fillmurray.com/${width}/${height}`} />
        {/* this is where we'd have log out */}
        <h3>Try logging out and logging in</h3>
      </Fragment>
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
