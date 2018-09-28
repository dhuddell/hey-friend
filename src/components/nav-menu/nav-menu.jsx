import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => (
  <div className="nav-menu">
    <Link className="nav-menu-link" to='/'>
      <span className="fa fa-users"></span>
    </Link>
    <Link className="nav-menu-link" to='/settings'>
      <span className="fa fa-gear"></span>
    </Link>
  </div>
);

export default NavMenu;
