/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';
import { setQuiz } from '../../../../api/auth';
import './AdminQuizzes.css';

function AdminQuizzes() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    console.log(values);
    await setQuiz(values);
    console.log(values);
  };
  return (
    <AdminTemplate page="AdminQuizzes">
      <div className="quiz">
        <div className="admin__container">
          <form onSubmit={handleSubmit} className="quiz__setterContianer">
            <div className="quiz__setterContianer1">
              <div className="quiz__img">
                <h2>Image Url</h2>
                <input
                  name="quizImageUrl"
                  type="url"
                  placeholder="set quiz image url"
                />
              </div>
              <div className="quiz__tittle">
                <h2>Quiz Title</h2>
                <input
                  name="quizName"
                  type="text"
                  placeholder="enter Quiz-Title"
                />
              </div>
              <div className="question__timer">
                <h2>Timer for Questions</h2>
                <input
                  name="quizTimer"
                  type="text"
                  placeholder="set timer in seconds 0:45s"
                />
              </div>
            </div>
            <div className="each__question_container">
              <div className="firstQuestion__title">
                <h2>Question No.1</h2>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p>Question</p>
                </div>
                <div className=" option1__input ">
                  <input
                    name="question"
                    className="input__question"
                    type="text"
                    placeholder="write question here"
                  />
                </div>
              </div>
              <div className="quiz_details">
                <div className="quiz_details__maintitile">
                  <h2>Quiz name</h2>
                </div>
                <div className=" option1__input ">
                  <input
                    className="input__option"
                    name="option1"
                    type="text"
                    placeholder="write first option here"
                  />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p>Option2</p>
                </div>
                <div className=" option1__input ">
                  <input
                    className="input__option"
                    name="option2"
                    type="text"
                    placeholder="write second option here"
                  />
                </div>
                <div className="number__question">
                  <div>
                    <h3>number of Questions</h3>
                  </div>
                  <p>10 questions</p>
                </div>
                <div className=" option1__input ">
                  <input
                    className="input__option"
                    name="option3"
                    type="text"
                    placeholder="write third option here"
                  />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p>Option4</p>
                </div>
                <div className=" option1__input ">
                  <input
                    className="input__option"
                    name="option4"
                    type="text"
                    placeholder="write forth option here"
                  />
                </div>
              </div>
              <div className="correctquestion">
                <div className="question__radio">
                  <p>Correct Answer</p>
                </div>
                <div className=" select__correctanswer ">
                  <select name="Select correct answer" id="correctAnswer">
                    <option value="">
                      Select correct Answer from the option above
                    </option>
                    <option value="option1">Option1</option>
                    <option value="option2">Option2</option>
                    <option value="option3">Option3</option>
                    <option value="option4">Option4</option>
                  </select>
                </div>
              </div>
              <div className="btn__container">
                <button type="submit" className="next__btn">
                  Next Question
                </button>
                <button type="submit" className="sub__btn">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}

export default AuthGuard(AdminQuizzes);
