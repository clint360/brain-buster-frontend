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
}) {
  return (
    <div>
      <button
        className="mainButton"
        type="button"
        style={{ width, height, border, backgroundColor, color, cursor }}
      >
        {titles}
      </button>
    </div>
  );
}
export default ButtonAtom;
