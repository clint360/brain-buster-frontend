/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidenav.css';
import myLogo from '../../../../assets/images/logo.svg';
import { deleteToken } from '../../../../utils';

function SideNav({ page }) {
  function activeBG(activePage) {
    if (activePage === page) {
      return 'rgba(50, 50, 50, 0.448)';
    }
    return 'transparent';
  }
  const navigate = useNavigate();
  const Logout = () => {
    deleteToken();
    navigate('/login');
  };
  return (
    <div className="sidenav">
      <div className="logodiv">
        <img src={myLogo} alt="logo" />
      </div>
      <div className="pageslist">
        <ul type="none">
          {' '}
          <li style={{ background: activeBG('AdminDashboard') }}>
            <Link to="/admin/dashboard">
              <i className="fa-sharp fa-solid fa-table-columns"> </i>
              <div>Dashboard</div>{' '}
            </Link>
          </li>
          <li style={{ background: activeBG('AdminQuizzes') }}>
            <Link to="/admin/quizzes/:quizName/:quizDuration">
              <i className="fa-solid fa-clipboard-question"> </i>
              <div>Quizzes</div>{' '}
            </Link>
          </li>
          <li style={{ background: activeBG('AdminResponses') }}>
            <Link to="/admin/responses">
              <i className="fa-solid fa-list-check"> </i>
              <div>Reports</div>{' '}
            </Link>
          </li>
          <li style={{ background: activeBG('AdminProfile') }}>
            <Link to="/admin/profile">
              <i className="fa-solid fa-user" />
              <div>Profile</div>{' '}
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-right-from-bracket"> </i>
            <div onClick={Logout}>Log Out</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
