import React from 'react';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';
import './AdminQuizzes.css';

function AdminQuizzes() {
  return (
    <AdminTemplate page="AdminQuizzes">
      <div className="quiz">
        <div className="admin__container">
          <form className="quiz__setterContianer">
            <div className="quiz__setterContianer1">
              <div className="quiz__img">
                <h2>Image Url</h2>
                <input type="text" placeholder="set image url" />
              </div>
              <div className="quiz__tittle">
                <h2>Quiz title</h2>
                <input type="text" placeholder="enter Quiz-Title" />
              </div>
              <div className="question__timer">
                <h2>Timer for question</h2>
                <input
                  type="text"
                  placeholder="set timer either per seconds 0:45s"
                />
              </div>
            </div>
            <div className="each__question_container">
              <div className="firstQuestion__title">
                <h2>Question n:1</h2>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p>Question</p>
                </div>
                <div className=" option1__input ">
                  <input type="text" placeholder="write question here" />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p>Option1</p>
                </div>
                <div className=" option1__input ">
                  <input type="text" placeholder="write first option here" />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p>Option2</p>
                </div>
                <div className=" option1__input ">
                  <input type="text" placeholder="write second option here" />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p>Option3</p>
                </div>
                <div className=" option1__input ">
                  <input type="text" placeholder="write third option here" />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <p>Option4</p>
                </div>
                <div className=" option1__input ">
                  <input type="text" placeholder="write forth option here" />
                </div>
              </div>
              <div className="correctquestion">
                <div className="question__radio">
                  <p>Correct Answer</p>
                </div>
                <div className=" option1__input ">
                  <input
                    type="text"
                    placeholder="write the correct answer here"
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="sub__btn">
                  Submit
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
