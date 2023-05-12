/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactModal from 'react-modal';
import AuthGuard from '../profile/AuthGuard';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';
import './AdminQuizzes.css';

// eslint-disable-next-line react/prop-types
function AdminQuizzes({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const routeParams = useParams();
  const { quizName, quizDuration } = routeParams;
  console.log(quizName);
  const copyText = `http://localhost:3001/user/quiz/instructions/${user.id}/${user.fullName}/${quizName}/${quizDuration}`;
  const [isCopied, setIsCopied] = useState(false);

  const copyToclipBoard = () => {
    setIsCopied(copyText);
    navigator.clipboard.writeText(copyText);
    console.log(setIsCopied);
  };

  const customStyles = {
    content: {
      backgroundColor: '#f5f7fa',
      top: '40%',
      left: '5%',
      margin: '0 auto',
      width: '510px',
      height: ' 150px',
      borderRadius: '5px',
      dispalay: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '69px',
    },
  };
  return (
    <AdminTemplate page="AdminQuizzes">
      <div className="quizPage">
        <h1>Feel Free, Let your imagination go Wild.</h1>
        <div className="createQuiz">
          <div className="createQuiz__cont">
            <div className="createQuizText">
              <h3>create you quiz here</h3>
              <i className="fa-solid fa-arrow-right" />
            </div>
            <Link to="/admin/createQuiz">
              <button type="submit">
                <i className="fa-solid fa-plus" />
                Create Quiz
              </button>
            </Link>
          </div>
        </div>
        <div className="quizPage__Historycontainer">
          <h1> Quiz Created </h1>
          <div className="history__mainCont">
            <div className="historycont1">
              <div className="imgtextcont">
                <div className="quiz_img">
                  <div className="imgquiz">London Test</div>
                </div>
                <div className="quiz_details">
                  <div className="quiz_details__maintitile">
                    <h2>Quiz</h2>
                  </div>
                  <p>Form 4 middle term Test</p>
                  <div className="testSubject">
                    <span>Subject : </span> <span> Javascript</span>
                  </div>
                </div>
              </div>
              <div className="interval">
                <div className="time">
                  <i className="fa-solid fa-calendar" />
                  <p>2 days ago</p>
                </div>
                <div className="shareTest">
                  <button
                    type="submit"
                    className="share"
                    onClick={() => setIsOpen(true)}
                  >
                    Share
                    <i className="fa-solid fa-share" />
                  </button>
                  <ReactModal
                    isOpen={isOpen}
                    contentLabel="Example Modal"
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                  >
                    <input
                      type="text"
                      name=""
                      id=""
                      value={copyText}
                      readOnly
                      placeholder="copy link address"
                      className="modalinput"
                    />
                    <button
                      className="modalbtn"
                      type="submit"
                      onClick={() => copyToclipBoard(copyToclipBoard)}
                    >
                      <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </ReactModal>
                </div>
                {/*  <div className="editTest">
                  <p>edit</p>
                  <i className="fa-solid fa-pen-to-square" />
                </div> */}
                <div className="deleteTest">
                  <p>delete</p>
                  <i className="fa-solid fa-trash" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}

export default AuthGuard(AdminQuizzes);
