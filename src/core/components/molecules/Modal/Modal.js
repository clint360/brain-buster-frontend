/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyledModal, StyledOverlay } from './Modal.styles';

function Modal({ clickState }) {
  const { isOpen, setIsOpen } = clickState;
  console.log(isOpen);
  return (
    <StyledOverlay click={isOpen}>
      <StyledModal click={isOpen}>
        <h1>Modal Box</h1>
        <button type="button" onClick={() => setIsOpen(false)}>
          close
        </button>
      </StyledModal>
    </StyledOverlay>
  );
}

export default Modal;
