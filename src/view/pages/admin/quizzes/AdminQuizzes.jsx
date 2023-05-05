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
                    type="text"
                    placeholder="write question here"
                  />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p>Option1</p>
                </div>
                <div className=" option1__input ">
                  <input
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
                    name="option2"
                    type="text"
                    placeholder="write second option here"
                  />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p>Option3</p>
                </div>
                <div className=" option1__input ">
                  <input
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
                    name="option4"
                    type="text"
                    placeholder="write forth option here"
                  />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p>Correct Answer</p>
                </div>
                <div className=" option1__input ">
                  <input
                    name="answer"
                    type="text"
                    placeholder="write correct answer here"
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="sub__btn">
                  Next Question
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AdminTemplate>
  );
}

export default AdminQuizzes;
