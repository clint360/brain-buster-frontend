/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

function Button({ title, borderColor, color, background, onClick, type }) {
  const buttonStyle = {
    fontFamily: 'Inter',
    border: borderColor ? `1px solid ${borderColor}` : `1px solid #1D4645`,
    borderRadius: '10px',
    fontSize: '20px',
    color: color || '#F5F5F5',
    background: background || '#1D4645',
    padding: '15px 40px',
    fontWeight: 'bold',
    minWidth: '150px',
    textAlign: 'center',
    cursor: 'pointer',
  };
  return (
    <button
      className="mainButton"
      type={type}
      onClick={onClick}
      style={buttonStyle}
    >
      {title}
    </button>
  );
}

export default Button;
