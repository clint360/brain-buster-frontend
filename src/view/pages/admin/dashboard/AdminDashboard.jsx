import React from 'react';
import Button from '../../../../core/components/atoms/Button';
import SideNav from '../../../../core/components/organisms/sidenav/SideNav';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div>
      <div className="mobileviewnavbar">
        <div>Three dots</div>
      </div>
      <div className="position_fixed">
        <SideNav />
      </div>
      <div className="adminProfilePage">
        <div className="adminnamebanner">
          <h1>Welcome, John Doe</h1>
          <span>
            Here is your Dashboard, a place where you can view your analytics
            and activity summary
          </span>
        </div>
        <div className="admininformation">
          <div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
