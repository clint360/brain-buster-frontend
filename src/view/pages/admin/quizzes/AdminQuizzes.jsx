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
              <div className="imgUrl__contai">
                <div className="imgUrl__img">n</div>
                <div className="img__text">
                  <h3>Set image Url</h3>
                  <span>Optional</span>
                </div>
              </div>
              <div className="quiz__tittle">
                <h2>Quiz title</h2>
                <button type="submit">Done</button>
                <input type="text" placeholder="enter Quiz-Title" />
              </div>
              <div className="question__timer">
                <h2>Timer per question</h2>
                <button type="submit">Timer</button>
                <input type="time" list="limittimesList" step="0.00" />
              </div>
            </div>
            <div className="each__question_container">
              <div className="firstQuestion__title">
                <h2>Quiz Title</h2>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <input type="radio" name="option1" id="option1" />
                  <p>Option1</p>
                </div>
                <div className=" option1__input ">
                  <input type="text" placeholder="write question here" />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <input type="radio" name="option1" id="option1" />
                  <p>Option2</p>
                </div>
                <div className=" option1__input ">
                  <input type="text" placeholder="write question here" />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <input type="radio" name="option1" id="option1" />
                  <p>Option3</p>
                </div>
                <div className=" option1__input ">
                  <input type="text" placeholder="write question here" />
                </div>
              </div>
              <div className="firstquestion">
                <div className="question__radio">
                  <input type="radio" name="option1" id="option1" />
                  <p>Option4</p>
                </div>
                <div className=" option1__input ">
                  <input type="text" placeholder="write question here" />
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
