/* eslint-disable no-unused-vars */
import React from 'react';
import myLogo from '../../../../assets/images/logo.svg';
import Button from '../../../../core/components/atoms/Button';

import './Instructions.css';

function Instructions() {
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
                <li>Do not Cheat</li>
                <li>Do not eat</li>
                <li>Minimize time spent on one question</li>
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
