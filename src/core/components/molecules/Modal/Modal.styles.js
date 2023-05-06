import styled from '@emotion/styled';

const StyledOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: ${(props) => (props.click ? 'flex' : 'none')}
  background-color: #0e0d0d4b;
`;

const StyledModal = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: ${({ click }) => (click ? '1' : '0')};
  visiblity: ${({ click }) => (click ? 'hidden' : 'visible')};
  transition: 0.4s ease-in-out scale;
  height: 400px;
  color: ((props) => props.click ? 'black': 'orange');
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 8px;
`;

export { StyledModal, StyledOverlay };
