import React from 'react';
import Button from '../../core/components/atoms/Button';
import NavBar from '../../core/components/organisms/NavBar';
import './LS.css';

function Signup() {
  return (
    <div>
      <NavBar />
      <div className="thePage">
        <div className="bigbox">
          <div className="box1">
            <h1 style={{ textAlign: 'center', padding: '40px 0', margin: '0' }}>
              Sign Up{' '}
            </h1>
            <legend>Name</legend>
            <input type="text" /> <br />
            <br />
            <legend>Email</legend>
            <input type="text" /> <br />
            <br />
            <legend>Password</legend>
            <input type="text" /> <br />
            <br />
            <br />
            <br />
            <div className="createAccountButton">
              <Button title="Create Account" />
            </div>
          </div>
          <div className="box2">
            <h1 style={{ padding: '40px 0', margin: '0' }}>BRAIN BUSTER </h1>
            <br />
            <p style={{ fontSize: '22px' }}>
              <b>We’ve made it easy for you to create your own assessement</b>
            </p>
            <br />
            <br />
            <br />
            <div className="createAccountButton">
              <Button title="Log In" background="white" color="#1D4645" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
