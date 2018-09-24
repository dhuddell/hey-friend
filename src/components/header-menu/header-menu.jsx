import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => (
  <div className="header-menu">
    <Link to='/menu'>
      <div>
        <h2 className="header-menu-top">menu</h2>
      </div>
    </Link>
  </div>
);

export default HeaderNav;
