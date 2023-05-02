import React from 'react';
import './Question.css';

function Question() {
  return (
    <div>
      <div className="centered-div">
        <div className="timer-container">
          <div className="blank-div"> 

          </div>  
          <div className="right-side-timer">
            <div className="left-right-div">
              <p>Time left </p>
            </div>
            <div className="right-left-div">
              <p className="seconds-left">15Sec</p>
            </div>
            <div className=""></div>
          </div>
        </div>

        <hr />
        
        <div className="all-content">
          <div className="questions">
            <p>
              1. The following method can
              be used to display data
              in some form using javascript
              {' '}

            </p>
          </div>

          <div className="response1">
            <div className="response-text">
              <p>Console.log()</p>
            </div>
            <div className="response-icon">
              <i className="fa-regular fa-circle-xmark" />
            </div>
          </div>

          <br />

          <div className="response2">
            <div className="response-text">
              <p>Console.log()</p>
            </div>
            <div className="response-icon">
              <i className="fa-regular fa-circle-xmark" />
            </div>
          </div>

          <br />

          <div className="response3">
            <div className="response-text">
              <p>Console.log()</p>
            </div>
            <div className="response-icon">
              <i className="fa-regular fa-circle-xmark" />
            </div>
          </div>

          <br />

          <div className="response4">
            <div className="response-text">
              <p>Console.log()</p>
            </div>
            <div className="response-icon">
              <i className="fa-regular fa-circle-xmark" />
            </div>
          </div>

          <div className="question-number-and-next">
            <div className="question-number">
              <h3>1 of 10 Questions </h3>
            </div>
            <div className="next">
              <button className="next-question">Next</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Question;
