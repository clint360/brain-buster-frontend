import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../core/components/atoms/Button';
import './Auth.css';
import myLogo from '../../../assets/images/logo.svg';

function Login() {
  return (
    <div>
      <div className="logo_head">
        <div>
          <div className="imgdv">
            <img src={myLogo} alt="logo" />
          </div>
        </div>
        <div className="menu" />
      </div>
      <div className="thePage">
        <div className="bigbox">
          <div className="box1">
            <h1 style={{ textAlign: 'center', padding: '40px 0', margin: '0' }}>
              Sign Up{' '}
            </h1>
            <div className="form">
              <legend>Email</legend>
              <input type="text" /> <br />
              <br />
              <legend>Password</legend>
              <input type="text" /> <br />
            </div>
            <div className="createAccountButton">
              <Button title="Log In" />
            </div>
          </div>
          <div className="box2">
            <div className="text">
              <h1>BRAIN BUSTER </h1>
              <span className="smalltext">
                <b>We’ve made it easy for you to create your own assessement</b>
              </span>
            </div>
            <div className="createAccountButton">
              <Link to="/signup">
                {' '}
                <Button
                  title="Create Account"
                  background="white"
                  color="#1D4645"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
