import React from 'react';
import './NavBar.css';
import logo from '../../../assets/images/logo.svg';
import Button from '../atoms/Button';

function NavBar() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
        padding: '20px 0',
        width: '80%',
      }}
    >
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="pages">
        <ul type="none">
          <li>About</li>
          <li>Quizes</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="buttons">
        <div>
          <Button title="Sign Up" background="white" color="#1D4645" />
        </div>
        <div>
          <Button title="Log In" borderColor="white" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
