/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Button from '../../../../core/components/atoms/Button';
import SideNav from '../../../../core/components/organisms/sidenav/SideNav';
import './AdminTemplate.css';
import AuthGuard from '../../../pages/admin/profile/AuthGuard';

function AdminTemplate({ children, text, page, user }) {
  const [sideNavPosition, setSideNavPosition] = useState('0px');
  const [pageMargin, setPageMargin] = useState('250px');
  const [deviceWidth, setDeviceWidth] = useState('0');

  const closeNavBar = () => {
    setSideNavPosition('-250px');
    setPageMargin('0px');
  };

  const openNavBar = () => {
    setSideNavPosition('0');
    setPageMargin('250px');
  };

  useEffect(() => {
    const x = window.innerWidth;
    setDeviceWidth(x);
    closeNavBar();
  }, []);

  const sideNavStyle = {
    translate: sideNavPosition,
    transition: 'translate 0.2s',
  };

  const pageStyle = {
    translate: pageMargin,
    transition: 'translate 0.2s',
  };

  return (
    <div>
      <div className="mobileviewnavbar" style={{ width: deviceWidth }}>
        <div onClick={openNavBar} title="Menu">
          <i className="fa-solid fa-bars" />
        </div>
      </div>
      <div className="navbar_div" style={sideNavStyle}>
        <SideNav page={page} />
      </div>
      <div className="adminPage" onClick={closeNavBar} style={pageStyle}>
        <div className="adminnamebanner">
          <h1>Hi, {user.fullName}</h1>
          <span>{text}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthGuard(AdminTemplate);
