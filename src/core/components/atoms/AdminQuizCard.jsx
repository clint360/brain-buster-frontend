/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

function AdminQuizCard({ quizName, quizImageURL, onClick }) {
  const cardStyle = {
    height: '160px',
    width: '145px',
    background: 'white',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'Commissioner',
    fontWeight: 'bold',
    color: 'rgb(78, 78, 78)',
    padding: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const imgprevStyle = {
    height: '80px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imgStyle = {
    borderRadius: '50%',
    width: '70px',
    height: '70px',
  };

  return (
    <div style={cardStyle} onClick={onClick} className="adminquizcard">
      <div className="imgprev" style={imgprevStyle}>
        <img
          src={
            quizImageURL ||
            'https://media.istockphoto.com/id/1390274690/vector/quiz-vector-pop-style-illustration-with-megaphone-on-white-background.jpg?s=612x612&w=0&k=20&c=Ovru56W0h7GtvRf49ktEcl1jy7sdfiquc0v8dJ_LIhA='
          }
          alt="pis"
          style={imgStyle}
        />
      </div>
      <div className="quizname">{quizName || 'Quiz Name'}</div>
    </div>
  );
}

export default AdminQuizCard;
