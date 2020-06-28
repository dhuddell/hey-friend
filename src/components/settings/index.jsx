import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => (
  <div className="settings-page content-wrapper" >
    <div className="settings-header">
      <h3>Here are your SETTINGS!</h3>
    </div>
    <div className="settings-list">
      <p>TODO Log out</p>
      <p>Set all progress to 0</p>
      <p>Change user info</p>
      <p>robot: beep boop</p>
      <Link to="/registration">Registration!</Link>
      <Link to="/login">Login!</Link>
      <Link to="/addfriend">Add friend!</Link>
    </div>
  </div>
);

export default Settings;
