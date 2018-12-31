import React from 'react';
import { Header, NavMenu } from '..';

const Settings = () => (
  <div className="settings-page" >
    <Header />
    <NavMenu />
    <div className="settings-header">
      <h3>Here are your SETTINGS!</h3>
    </div>
    <div className="settings-list">
      <p>Coolness: off</p>
      <p>Rating of app: 10/10</p>
      <p>Funniness: 4/10</p>
      <p>robot: beep boop</p>
    </div>
  </div>
);

export default Settings;
