/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';
import './AdminQuizzes.css';

// eslint-disable-next-line react/prop-types
function AdminQuizzes({ copyText }) {
  console.log(copyText);
  const [isOpen, setIsOpen] = useState(false);

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
          <h1>Recent Quiz Created </h1>
          <div className="history__mainCont">
            <div className="historycont1">
              <div className="quiz_img">
                <div className="imgquiz">London Test</div>
              </div>
              <div className="quiz_details">
                <div className="quiz_details__maintitile">
                  <h2>Quiz name</h2>
                </div>
                <p>Form 4 middle term Test</p>
                <div className="testSubject">
                  <span> subject: </span>
                  <p>History</p>
                </div>
              </div>
            </div>
            <div className="historycont2">
              <div className="historycont2__innercontainer">
                <div className="time__interval">
                  <div>
                    <h3>Recent Activity</h3>
                  </div>
                  <p>1 dag ago</p>
                </div>
                <div className="number__question">
                  <div>
                    <h3>number of Questions</h3>
                  </div>
                  <p>10 questions</p>
                </div>
                <div className="time_frame">
                  <div>
                    <h3>Time frame per Questions</h3>
                  </div>
                  <p>0.29 sec</p>
                </div>
              </div>
              <div className="innercontainer__action">
                <button type="submit" className="edit">
                  Edit
                  <i className="fa-solid fa-pen-to-square" />
                </button>
                <div>
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
                <button type="submit" className="delete">
                  <i className="fa-solid fa-trash-xmark" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}

export default AdminQuizzes;
