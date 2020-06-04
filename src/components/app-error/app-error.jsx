import React from 'react';
import { Link } from 'react-router-dom';

const AppError = (error) => (
  <div>
    <p>{`Error: ${error.errors} `}</p>
    <div className="login-link">
      <Link to="/login">Are you logged in?</Link>
    </div>
  </div>
);

export default AppError;
