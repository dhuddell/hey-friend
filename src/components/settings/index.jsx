import React from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const Settings = () => {
  const username = localStorage.getItem('username') || null;
  const { addToast } = useToasts();

  if (!username) {
    addToast('Please log in or register', {
      appearance: 'error',
      autoDismissTimeout: 2500,
      autoDismiss: true,
    });

    return <Redirect to="/login" />;
  }

  const history = useHistory();
  const logOut = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('username');
    return history.push('/login');
  };

  return (
    <div className="settings-page content-wrapper" >
      <div className="settings-header">
        <h3>Here are your SETTINGS!</h3>
      </div>
      <div className="settings-list">
        <p>TODO Log out</p>
        <p>Set all progress to 0</p>
        <p>Change user info</p>
        <p>robot: beep boop</p>
        <button className="btn btn-primary">
          <Link className="link-no-style" to="/registration">Registration!</Link>
        </button>
        <button className="btn btn-primary">
          <Link className="link-no-style" to="/login">Login!</Link>
        </button>
        <button className="btn btn-primary">
          <Link className="link-no-style" to="/add-friend">Add friend!</Link>
        </button>
        <button className="btn btn-primary" onClick={logOut}>
          {'Log out :o'}
        </button>
      </div>
    </div>
  );
};

export default Settings;
