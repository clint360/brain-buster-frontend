import React from 'react';
import myLogo from '../../../../assets/images/logo.svg';
import Button from '../../../../core/components/atoms/Button';

function UserInfo() {
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
        <div className="instructionsbox">
          <div className="header">
            <h1>Enter Your Information</h1>
            <span>Enter your information to get you started</span>
          </div>
          <div className="form">
            <legend>Full Name</legend>
            <input type="text" /> <br />
            <br />
            <legend>Email</legend>
            <input type="text" /> <br />
          </div>
          <div style={{ width: 'fit-content', margin: 'auto' }}>
            <Button title="    Start Now    " background="#1D4645" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;