import React from 'react';
import './navBar.css';
import Logo from '../../../../assets/images/logo.svg';
import ButtonAtom from '../../atoms/button/ButtonAtom';

function NavBar() {
  return (
    <div className="navbar">
      <div className="navcont">
        <div className="logoCont">
          <img src={Logo} alt="brainBuster" />
        </div>
        <div className="navLinks">
          <ul>
            <li>
              <i className="fa-solid fa-magnifying-glass" />
            </li>
            <li>About</li>
            <li>Quizzes</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="navBtn">
          <div>
            <ButtonAtom titles="SignUp" className="signup" />
          </div>
          <ButtonAtom titles="Login" className="login" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
