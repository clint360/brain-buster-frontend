/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../core/components/atoms/Button';
import { register } from '../../../api/auth';
import './Auth.css';
import myLogo from '../../../assets/images/logo.svg';

function Signup() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    console.log(values);
    await register(values);
    console.log(values);
    navigate('/');
  };
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
            <form action="" onSubmit={handleSubmit}>
              <div className="form">
                <label>Name</label>
                <input type="text" name="fullName" required /> <br />
                <br />
                <label>Email</label>
                <input type="email" name="emailAddress" required /> <br />
                <br />
                <label>Password</label>
                <input type="password" name="password" required /> <br />
              </div>
              <div className="createAccountButton">
                <Link to="/login">
                  <Button type="submit" title="Create Account" />
                </Link>
              </div>
            </form>
          </div>
          <div className="box2">
            <div className="text">
              <h1>BRAIN BUSTER </h1>
              <span className="smalltext">
                <b>We’ve made it easy for you to create your own assessement</b>
              </span>
            </div>
            <div className="createAccountButton">
              <Link to="/login">
                <Button title="Log In" background="white" color="#1D4645" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
