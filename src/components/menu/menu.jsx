import React from 'react';
import { Header, HeaderMenu } from '../../components';

const Menu = () => (
  <div>
    <Header />
    <HeaderMenu />
    <div className='menu-header'>
      <h3>Here is some Menu!</h3>
    </div>
    <div className='Menu-list'>
      <p>Nav</p>
      <p>MENUv</p>
      <p>Nav</p>
      <p>FENU</p>
      <p>Nava</p>
    </div>
  </div>
);

export default Menu;
