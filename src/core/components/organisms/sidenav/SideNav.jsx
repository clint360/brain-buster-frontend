import React from 'react';
import './Sidenav.css';

function SideNav() {
  return (
    <div className="sidenav">
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
