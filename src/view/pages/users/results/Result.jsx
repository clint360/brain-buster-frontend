import React from 'react';
import './Result.css';

const result = () => (
  <div>
    <div className="centered-div">
      <div className="remark">
        <i className="fa-solid fa-check fa-beat-fade" />
      </div>
      <div className="feedback-message">
        <p className="message">
          Great job “name”! Here is how you performed in this quiz
        </p>
      </div>
      <hr className="line" />
      <div className="metrics">
        <div className="sub-total">
          <p className="total-content"> Total quiz points:</p>
        </div>
        <div className="number">
          <p className="sub-number">
            80
          </p>
        </div>
      </div>
      <div className="metrics-container">
        <div className="metrics">
          <div className="sub-total">
            <p className="total-content">Total Questions:</p>
          </div>
          <div className="number">
            <p className="sub-number">
              30
            </p>
          </div>
        </div>
        <div className="metrics">
          <div className="sub-total">
            <p className="total-content"> Attempt:</p>
          </div>
          <div className="number">
            <p className="sub-number">
              30
            </p>
          </div>
        </div>
        <div className="metrics">
          <div className="sub-total">
            <p className="total-content"> Score: </p>
          </div>
          <div className="number">
            <p className="sub-number">
              65/80
            </p>
          </div>
        </div>
        <div className="metrics">
          <div className="sub-total">
            <p className="total-content"> Percentage:  </p>
          </div>
          <div className="number">
            <p className="sub-number">
              75%
            </p>
          </div>
        </div>
        <hr className="line" />
        <div className="metrics">
          <div className="sub-total">
            <p className="total-content">
              Quiz Result:
            </p>
          </div>
          <div className="number">
            <p className="sub-number">
              Passed
            </p>
          </div>
        </div>
        <div className="quiz-result-buttom">
          <div>
            <button className="share-button">
              Share
              {' '}
              <i className="fa-solid fa-share-nodes" />
            </button>
          </div>
          <div>
            <button className="retake-button">Retake quiz</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default result;
