import React from 'react';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';
import './AdminQuizzes.css';

function AdminQuizzes() {
  return (
    <AdminTemplate page="AdminQuizzes">
      <div className="quiz">
        <div className="admin__container">
          <div className="quiz__setterContianer">
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
        </div>
        <div className="each__question_container">
          <div className="firstQuestion">
            <div className="firstQuestion__title">Question title : </div> <hr />
            <div className="option">
              <div className="option__container">
                <div className="chooseOption">
                  <input type="radio" value="add1" />
                  <p>Option 1</p>
                </div>
                <input
                  type="text"
                  placeholder="write your question here"
                  className="chooseOption__input"
                />
              </div>
              <div>
                <div>
                  <input type="radio" value="add1" />
                  Add Option <i className="fa-solid fa-circle-plus" />
                </div>
                <input type="text" placeholder="write your question here" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}

export default AdminQuizzes;
