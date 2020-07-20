import React from 'react';
import { useHistory } from 'react-router-dom';

const getRandom = (min, max) => {
  const float = Math.random() * (max - min) + min;
  return Math.ceil(float);
};

const renderBill = (width, height) => (
  <img src={`https://www.fillmurray.com/${width}/${height}`} />
);

const mailToDetails = (username) => `mailto:dan.huddell@gmail.com
?subject=HEYFRIEND_FEEDBACK?body=Username-${username}-has-some-feedback`;

const AppError = ({ error }) => {
  const width = getRandom(210, 340);
  const height = getRandom(200, 400);
  const history = useHistory();
  const username = window.localStorage.getItem('username');


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
          <button
            className="btn btn-primary">
            <a href={mailToDetails(username)}>
              {'Tell Dan what happened'}
            </a>
          </button>
        </div>
      );
    }

    if ([400, 401, 403, 404].includes(error.networkError.statusCode)) {
      return (
        <div className="content-wrapper">
          <h3>{`You're lost bub, ${error.networkError.statusCode}`}</h3>
          <h2>Bill Murray blames Dan.</h2>
          {renderBill(width, height)}
          <div>
            <button
              className="btn btn-primary"
              onClick={logOut}
            >
              {'Try logging out and logging in'}
            </button>
            <a href={mailToDetails(username)}>
              <button
                className="btn btn-primary">
                <span className="fas fa-envelope-open-text right-buff" />
                {'Tell Dan what happened'}
              </button>
            </a>
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
        <h3>This is an error.</h3>
        <h2>Bill Murray blames Dan.</h2>
        {renderBill(width, height)}
        <div>
          <button
            className="btn btn-primary"
            onClick={logOut}
          >
            {'Try logging out and logging in'}
          </button>
          <button
            className="btn btn-primary">
            <i className="fas fa-envelope-open-text right-buff" />
            <a href={mailToDetails(username)}>
              {'Tell Dan what happened'}
            </a>
          </button>
        </div>
      </div>
    );
  }

  console.log('Unknown Errors>>>>>>>>>>');
  console.log(JSON.stringify(error));
  console.log('<<<<<<<<<<GraphQL Unknown');

  return (
    <div className="content-wrapper">
      <h1 style={{ color: '#00ffb1' }}>¯\_(ツ)_/¯</h1>
      <h1 style={{ color: '#00ffb1' }}>Unknown errors, sorry</h1>
      {renderBill(width, height)}
      <div>
        <button
          className="btn btn-primary"
          onClick={logOut}
        >
          {'Try logging out and logging in'}
        </button>
        <h4>{'If you tried this ^^ sorry, the server is down.'}</h4>
        <button
          className="btn btn-primary">
          <i className="fas fa-envelope-open-text right-buff" />
          <a href={mailToDetails(username)}>
            {'Tell Dan what happened'}
          </a>
        </button>
      </div>

    </div>
  );
};

export default AppError;
