/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../core/components/atoms/Button';
import { AppContext } from '../../../../core/data/Context';
import './QuizPage.css';

function QuizPage() {
  const { questions, setUserResponses, userResponses } = useContext(AppContext);
  const [timer, setTimer] = useState(15);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizTimePerQuestion, setQuizTimePerQuestion] = useState(20);
  const [optionsBackgroundColor, setOptionsBackgroundColor] = useState(
    new Array(4).fill(null)
  );
  const navigate = useNavigate();
  const correctAnswerBackground = 'rgba(146, 204, 164, 1)';
  const wrongAnswerBackground = 'rgba(250, 216, 218, 1)';

  const onOptionSelect = (index) => {
    setUserResponses((prev) => [...prev, index]);
    const response = document.querySelector('.options');
    response.disable = true;
    if (index === questions[currentQuestionIndex].answerIndex) {
      optionsBackgroundColor[index] = correctAnswerBackground;
      setOptionsBackgroundColor(optionsBackgroundColor);
    } else {
      optionsBackgroundColor[index] = wrongAnswerBackground;
      setOptionsBackgroundColor(optionsBackgroundColor);
      optionsBackgroundColor[questions[currentQuestionIndex].answerIndex] =
        correctAnswerBackground;
      setOptionsBackgroundColor(optionsBackgroundColor);
    }
  };

  useEffect(() => {
    setTimer(quizTimePerQuestion);
    setOptionsBackgroundColor([null, null, null, null]);
    if (currentQuestionIndex > questions.length - 1) {
      console.log(userResponses);
      navigate('/user/quiz/results');
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    let timeStamp;
    if (timer !== 0) {
      timeStamp = setTimeout(() => setTimer((time) => time - 1), 1000);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    return () => clearTimeout(timeStamp);
  }, [timer]);

  return (
    <div>
      <div className="whole-page">
        <div className="centered-div">
          <div className="timer-container">
            <div className="blank-div" />
            <div className="right-side-timer">
              <div className="left-right-div">
                <p className="time-left">Time left </p>
              </div>
              <div
                className="right-left-div"
                style={{ background: timer <= 5 ? 'red' : 'white' }}
              >
                <p className="seconds-left">
                  <span style={{ width: '60px' }}> {timer} </span> sec
                </p>
              </div>
              <div className="" />
            </div>
          </div>
          <hr />

          <div className="all-content">
            <div className="questions">
              <p className="question-title">
                {currentQuestionIndex + 1}.
                {questions[currentQuestionIndex].question}
              </p>
            </div>

            <div className="options">
              {questions[currentQuestionIndex].options.map((item, index) => {
                return (
                  <div>
                    <div
                      className="response1"
                      style={{ background: optionsBackgroundColor[index] }}
                      onClick={() => onOptionSelect(index)}
                    >
                      <div className="response-text">
                        <p>{item}</p>
                      </div>
                      {optionsBackgroundColor[index] ? (
                        <div className="response-icon">
                          {optionsBackgroundColor[index] ===
                          wrongAnswerBackground ? (
                            <i className="fa-regular fa-circle-xmark" />
                          ) : (
                            <i className="fa-solid fa-circle-check" />
                          )}
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>
                    <br />
                  </div>
                );
              })}
            </div>

            <div className="question-number-and-next">
              <div className="question-number">
                <h3>
                  {currentQuestionIndex + 1} of {questions.length} Questions{' '}
                </h3>
              </div>
              <div className="next">
                <Button
                  title="Next"
                  onClick={() => {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
