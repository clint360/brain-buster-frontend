/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import myLogo from '../../../../assets/images/logo.svg';
import Button from '../../../../core/components/atoms/Button';

import './Instructions.css';

function Instructions() {
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
            <h1>Biology Test</h1>
            <div className="someinfo">
              <div>19 Questions</div>{' '}
              <div>
                <i className="fa-regular fa-clock" /> 9 mins
              </div>{' '}
            </div>
            <div className="authordiv">By Christopher Che</div>
          </div>
          <div className="instructions">
            <h1>Instructions</h1>
            <div className="inslist">
              <ul>
                <li>
                  You only have <span style={{ color: 'red' }}>10 seconds</span>{' '}
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
              />{' '}
            </div>
            <div>
              <Button title="Start Quiz" background="#1D4645" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
