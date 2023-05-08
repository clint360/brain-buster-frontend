/* eslint-disable react/prop-types */ /* eslint-disable no-console */ /*
eslint-disable no-undef */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminTemplate from '../../templates/admin/admintemplate/AdminTemplate';
import './createQuiz.css';
import { setQuiz } from '../../../api/auth';
import AuthGuard from '../admin/profile/AuthGuard';

function CreateQuiz({ user }) {
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [selected, setSelected] = useState(false);
  const [num, setNum] = useState(1);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    await setQuiz(values);
    setQuestion('');
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setNum(num + 1);
    console.log(values, selected, setSelected);
    if (num === 10) {
      setDisabled(true);
    }
  };
  return (
    <AdminTemplate page="CreateQuiz">
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
                  required
                  placeholder="enter Quiz-Title"
                />
              </div>
              <div className="question__timer">
                <h2>Timer for Questions</h2>
                <input
                  name="quizTimer"
                  type="text"
                  required
                  placeholder="set timer in seconds 0:45s"
                />
              </div>
            </div>
            <div className="each__question_container">
              <div className="firstQuestion__title">
                <h2>Question No.{num}</h2>
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
                    required
                    onChange={(event) => setQuestion(event.target.value)}
                    value={question}
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
                    className="input__option"
                    name="option1"
                    type="text"
                    required
                    onChange={(event) => setOption1(event.target.value)}
                    value={option1}
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
                    required
                    onChange={(event) => setOption2(event.target.value)}
                    value={option2}
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
                    className="input__option"
                    name="option3"
                    type="text"
                    required
                    onChange={(event) => setOption3(event.target.value)}
                    value={option3}
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
                    required
                    onChange={(event) => setOption4(event.target.value)}
                    value={option4}
                    placeholder="write forth option here"
                  />
                </div>
              </div>
              <div className="correctquestion">
                <div className="question__radio">
                  <p>Correct Answer</p>
                </div>
                <div className=" select__correctanswer ">
                  <select required name="answer">
                    <option value="{selected}">
                      Select correct Answer from the options below
                    </option>
                    <option value="{option1}">{option1}</option>
                    <option value="{option2}">{option2}</option>
                    <option value="{option3}">{option3}</option>
                    <option value="{option4}">{option4}</option>
                  </select>
                </div>
              </div>
              <div className="btn__container">
                <button type="submit" disabled={disabled} className="next__btn">
                  Next Question
                </button>
                <Link to="/admin/quizzes">
                  <button type="button" className="sub__btn">
                    submit
                  </button>
                </Link>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p hidden>UserId</p>
                </div>
                <div className=" option1__input ">
                  <input
                    className="input__option"
                    name="UserId"
                    type="number"
                    hidden
                    defaultValue={user.id}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AdminTemplate>
  );
}
export default AuthGuard(CreateQuiz);
