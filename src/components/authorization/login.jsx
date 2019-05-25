import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className="login authorization-form">
    <div className="form-box">
      <div className="form-title">
        <span className="form-title-text">
          Login
        </span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('submittted create boi');
        }}
      >
        <div className="form-cell">Username</div>
        <input className="authorization-field" placeholder="..clever247"/>
        <div className="form-cell">Password</div>
        <input className="authorization-field" placeholder="..h4rdtoh4ck"/>
        <button type="submit" className="btn modal-btn authorization-btn">Login</button>
      </form>
    </div>
    <div className="login-link">
      <Link to="/registration">Not Registered? Click here to register!</Link>
    </div>
  </div>
);

export default Login;
