/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

function AnalyticsCard({ number, title, backgroundGradient }) {
  useEffect(() => {
    console.log(backgroundGradient());
  });

  const cardStyle = {
    height: '160px',
    width: '145px',
    background: backgroundGradient(),
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'Commissioner',
    fontWeight: 'bold',
    color: 'white',
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
    fontSize: '50px',
  };

  const imgStyle = {
    borderRadius: '50%',
    width: '70px',
    height: '70px',
  };

  return (
    <div style={cardStyle} className="adminquizcard">
      <div className="imgprev" style={imgprevStyle}>
        <div style={imgStyle}> {number} </div>
      </div>
      <div className="quizname">{title || '?'}</div>
    </div>
  );
}

export default AnalyticsCard;
