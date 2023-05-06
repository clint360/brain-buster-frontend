import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import myLogo from '../../../../assets/images/logo.svg';
import Button from '../../../../core/components/atoms/Button';
import { AppContext } from '../../../../core/data/Context';

function UserInfo() {
  const { setQuizTaker } = useContext(AppContext);
  const redirect = useNavigate();
  const usernameRef = useRef();
  const emailAddressRef = useRef();
  const handleStartQuiz = () => {
    const userInfo = {
      username: usernameRef.current.value,
      emailAddress: emailAddressRef.current.value,
    };
    setQuizTaker(userInfo);
    if (userInfo.username !== '' && userInfo.emailAddress !== '') {
      redirect('/user/quiz/test');
    }
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
        <div className="instructionsbox">
          <div className="header">
            <h1>Enter Your Information</h1>
            <span>Enter your information to get you started</span>
          </div>
          <form action="" onSubmit={handleStartQuiz}>
            <div className="form">
              <legend>Full Name</legend>
              <input type="text" ref={usernameRef} required /> <br />
              <br />
              <legend>Email</legend>
              <input type="email" ref={emailAddressRef} required /> <br />
            </div>
            <div style={{ width: 'fit-content', margin: 'auto' }}>
              <Button
                title="    Start Now    "
                background="#1D4645"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
