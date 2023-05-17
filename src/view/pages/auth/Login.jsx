/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../core/components/atoms/Button';
import './Auth.css';
import { login } from '../../../api/auth';
import myLogo from '../../../assets/images/logo.svg';
import { saveToken } from '../../../utils';
import Loading from '../../../core/components/atoms/loading/Loading';

function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const values = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );

    const { data } = await login(values.emailAddress, values.password);

    setLoading(false);
    if (data === 'Email or Password incorrect') {
      setError('Invalid emailAdress or password');
    } else {
      console.log(values.emailAddress, values.password, data);
      saveToken(data);
      navigate('/admin/dashboard');
    }
  };
  if (loading) {
    return <Loading />;
  }
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
              Sign In{' '}
            </h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="form">
                <label>Email</label>
                <input name="emailAddress" type="email" required /> <br />
                <br />
                <label>Password</label>
                <input name="password" type="password" min={8} required />{' '}
                <br />
              </div>
              {error && <p className="error">{error}</p>}
              <div className="createAccountButton">
                <Button title="Log In" />
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
              <Link to="/signup">
                {' '}
                <Button
                  type="submit"
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
