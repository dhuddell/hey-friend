import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthRedirect } from '..';

const Settings = () => {
  const username = localStorage.getItem('username') || null;
  const token = localStorage.getItem('token') || null;
  if (!username || !token) return <AuthRedirect />;

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
        <p>Change user info...</p>
        <p>robot: beep boop</p>
        <button className="btn btn-primary">
          <Link className="link-no-style" to="/registration">Registration</Link>
        </button>
        <button className="btn btn-primary">
          <Link className="link-no-style" to="/login">Login</Link>
        </button>
        <button className="btn btn-primary">
          <Link className="link-no-style" to="/add-friend">Add friend</Link>
        </button>
        <button className="btn btn-primary" onClick={logOut}>
          {'Log out'}
        </button>
      </div>
    </div>
  );
};

export default Settings;
