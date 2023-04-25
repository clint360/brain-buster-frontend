/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

function Button({ title }) {
  return (
    <button className="mainButton" type="button">
      {title}
    </button>
  );
}

export default Button;
