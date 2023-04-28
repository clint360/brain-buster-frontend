/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './Sidenav.css';
import myLogo from '../../../../assets/images/logo.svg';

function SideNav({ page }) {
  return (
    <div className="sidenav">
      <div className="logodiv">
        <img src={myLogo} alt="logo" />
      </div>
      <div className="pageslist">
        <ul type="none">
          <li>
            <i className="fa-sharp fa-solid fa-table-columns"> </i>
            <div>Dashboard</div>{' '}
          </li>
          <li>
            <i className="fa-solid fa-clipboard-question"> </i>
            <div>Quizzes</div>{' '}
          </li>
          <li>
            <i className="fa-solid fa-list-check"> </i>
            <div>Responses</div>{' '}
          </li>
          <li>
            <i className="fa-solid fa-user" />
            <div>Profile</div>{' '}
          </li>
          <li>
            <i className="fa-solid fa-right-from-bracket"> </i>
            <div>Log Out</div>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
