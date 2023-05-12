/* eslint-disable react/jsx-no-bind */
import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
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
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#category">
              <li>Quizzes</li>
            </a>
            <a href="#service">
              <li className="service">Services</li>
            </a>
          </ul>
        </div>
        <div className="navBtn">
          <div>
            <Link to="/signup">
              <ButtonAtom titles="SignUp" className="signup" />
            </Link>
          </div>
          <Link to="/login">
            <ButtonAtom
              titles="Login"
              backgroundColor="white"
              border="2px solid green"
              color="#333333"
              width="135px"
              cursor="pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
