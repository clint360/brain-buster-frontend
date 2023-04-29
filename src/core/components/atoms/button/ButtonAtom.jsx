/* eslint-disable react/prop-types */
import React from 'react';
import './buttonAtom.css';

// eslint-disable-next-line react/prop-types
function ButtonAtom({
  titles,
  width,
  height,
  border,
  backgroundColor,
  color,
  cursor,
  margin,
}) {
  return (
    <div>
      <button
        className="mainButton"
        type="button"
        style={{
          width,
          height,
          border,
          backgroundColor,
          color,
          cursor,
          margin,
        }}
      >
        {titles}
      </button>
    </div>
  );
}
export default ButtonAtom;
