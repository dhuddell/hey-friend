import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => (
  <div className="registration authorization-form">
    <div className="form-box">
      <div className="form-title">
        <span className="form-title-text">
          Registration
        </span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('logged in or something');
        }}
      >
        <div className="form-cell">Username</div>
        <input className="authorization-field" placeholder="..clever247"/>
        <div className="form-cell">Password</div>
        <input className="authorization-field" placeholder="..h4rdtoh4ck"/>
        <button type="submit" className="btn modal-btn authorization-btn">Register</button>
      </form>
    </div>
    <div className="login-link">
      <Link to="/login">Registered? Click here to login!</Link>
    </div>
  </div>
);

export default Registration;
