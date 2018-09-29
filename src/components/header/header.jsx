import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link to="/">
      <h1 className="header-text">Friend Zone</h1>
    </Link>
  </div>
);

export default Header;
