/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

function Button({ title, borderColor, color, background, onClick }) {
  const buttonStyle = {
    fontFamily: 'Inter',
    border: borderColor ? `1px solid ${borderColor}` : `1px solid #1D4645`,
    borderRadius: '10px',
    fontSize: '20px',
    color: color || '#F5F5F5',
    background: background || '#1D4645',
    padding: '15px 40px',
    fontWeight: 'bold',
    minWidth: '100px',
    textAlign: 'center',
  };
  return (
    <button
      className="mainButton"
      type="button"
      onClick={onClick}
      style={buttonStyle}
    >
      {title}
    </button>
  );
}

export default Button;
