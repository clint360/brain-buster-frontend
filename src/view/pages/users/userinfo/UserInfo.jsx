/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useInfo } from '../../../../api/auth';
import './UserInfo.css';
import myLogo from '../../../../assets/images/logo.svg';
import Button from '../../../../core/components/atoms/Button';
import { AppContext } from '../../../../core/data/Context';
import Loading from '../../../../core/components/atoms/loading/Loading';

function UserInfo() {
  const { setQuizTaker } = useContext(AppContext);
  const navigate = useNavigate();
  const routeParams = useParams();
  const { userId, quizName, quizDuration } = routeParams;
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    const feedback = await useInfo(values);
    console.log(values);
    setQuizTaker(values);

    if (feedback.data.name !== 'SequelizeUniqueConstraintError') {
      navigate(`/user/quiz/test/${userId}/${quizName}/${quizDuration}`);
    }
    setLoading(false);
    setError('This email address already exist');
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
        <div className="instructionsbox">
          <div className="infoHeader">
            <h1>Enter Your Information</h1>
            <span>Enter your information to get you started</span>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="form">
              <label>Name</label>
              <input type="text" name="studentName" required /> <br />
              <br />
              <label>Email</label>
              <input type="email" name="emailAddress" required /> <br />
            </div>
            {error && <p className="error">{error}</p>}
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
