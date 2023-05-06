/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import myLogo from '../../../../assets/images/logo.svg';
import Button from '../../../../core/components/atoms/Button';
import { AppContext } from '../../../../core/data/Context';

import './Instructions.css';

function Instructions() {
  const { questions, quizInfo } = useContext(AppContext);
  const redirect = useNavigate();
  const [quizDuration, setQuizDuration] = useState();
  useEffect(() => {
    const d = ((quizInfo.durationPerQuestion * questions.length) / 60).toFixed(
      2
    );
    setQuizDuration(d);
  }, []);

  const startQuiz = () => {
    redirect('/user/info');
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
          <div className="aboutquiz">
            <h1>{quizInfo.name}</h1>
            <div className="someinfo">
              <div>{questions.length} Questions</div>{' '}
              <div>
                <i className="fa-regular fa-clock" /> {quizDuration} mins
              </div>{' '}
            </div>
            <div className="authordiv">By {quizInfo.admin}</div>
          </div>
          <div className="instructions">
            <h1>Instructions</h1>
            <div className="inslist">
              <ul>
                <li>
                  You only have{' '}
                  <span style={{ color: 'red' }}>
                    {quizInfo.durationPerQuestion} seconds
                  </span>{' '}
                  for each question.{' '}
                </li>
                <li>
                  You have to select an option before you can go to the next
                  question.
                </li>
                <li> There's no going back after selecting an option.</li>
                <li>You cannot select an option once the timer goes off.</li>
                <li>You cannot exit the quiz while playing.</li>
              </ul>
            </div>
          </div>
          <div className="actions">
            <div>
              <Button
                title="Exit Quiz"
                background="#E8522A"
                borderColor="#E8522A"
                onClick={() => {
                  window.close();
                }}
              />{' '}
            </div>
            <div>
              <Button
                title="Start Quiz"
                background="#1D4645"
                onClick={startQuiz}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
