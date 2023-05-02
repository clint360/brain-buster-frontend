/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import Button from '../../../../core/components/atoms/Button';
import { AppContext } from '../../../../core/data/Context';
import './QuizPage.css';

function QuizPage() {
  const { questions } = useContext(AppContext);
  const [timer, setTimer] = useState(15);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizTimePerQuestion, setQuizTimePerQuestion] = useState(40);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [optionIcon, setOptionIcon] = useState('');
  const [optionsBackgroundColor, setOptionsBackgroundColor] = useState([
    ['', '', '', ''],
    [''],
    [''],
    [''],
  ]);
  const correctAnswerBackground = 'rgba(250, 216, 218, 1)';
  const wrongAnswerBackground = 'rgba(146, 204, 164, 1)';
  const correctAnswerIcon = '<i className="fa-regular fa-circle-xmark" />';
  const wrongAnswerIcon =
    '<div className="response-icon"><i className="fa-regular fa-circle-xmark" /></div>';

  const onOptionSelect = (index) => {
    if (index === questions[currentQuestionIndex].answerIndex) {
      setOptionsBackgroundColor();
    }
  };

  useEffect(() => {
    setTimer(quizTimePerQuestion);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (timer !== 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
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
                <p className="seconds-left">{timer} sec</p>
              </div>
              <div className="" />
            </div>
          </div>
          <hr />

          <div className="all-content">
            <div className="questions">
              <p className="question-title">
                {currentQuestionIndex + 1}.{' '}
                {questions[currentQuestionIndex].question}
              </p>
            </div>

            <div className="options">
              {questions[currentQuestionIndex].options.map((item, index) => {
                return (
                  <div>
                    <div
                      className="response1"
                      onClick={() => onOptionSelect(index)}
                    >
                      <div className="response-text">
                        <p>{item}</p>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: wrongAnswerIcon }}
                      />
                    </div>
                    <br />
                  </div>
                );
              })}
            </div>

            <div className="question-number-and-next">
              <div className="question-number">
                <h3>
                  {' '}
                  {currentQuestionIndex + 1} of {questions.length} Questions{' '}
                </h3>
              </div>
              <div className="next">
                <Button title="Next" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
