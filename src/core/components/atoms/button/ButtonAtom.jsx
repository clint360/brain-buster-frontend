/* eslint-disable react/prop-types */
import React from 'react';
import './buttonAtom.css';

// eslint-disable-next-line react/prop-types
function ButtonAtom({ titles }) {
  return (
    <div>
      <button className="mainButton" type="button">
        {titles}
      </button>
    </div>
  );
}
export default ButtonAtom;
