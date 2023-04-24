import React from 'react';
import Button from '../../core/components/atoms/Button';
import './LS.css';
import myLogo from '../../assets/images/logo.svg';

function Login() {
  return (
    <div>
      <div className="bighead">
        <div>
          <div className="imgdv">
            <img src={myLogo} alt="logo" />
          </div>
        </div>
        <div className="menu">Home</div>
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
            <div style={{ height: '75%' }}>
              <h1 style={{ padding: '40px 0', margin: '0' }}>BRAIN BUSTER </h1>
              <p style={{ fontSize: '22px' }}>
                <b>We’ve made it easy for you to create your own assessement</b>
              </p>
            </div>
            <div className="createAccountButton">
              <Button
                title="Create Account"
                background="white"
                color="#1D4645"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
