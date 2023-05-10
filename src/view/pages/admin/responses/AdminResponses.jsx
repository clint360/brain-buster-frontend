import React from 'react';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';
import './AdminResponses.css';

function AdminResponses() {
  return (
    <AdminTemplate page="AdminResponses">
      <div className="result">
        <div className="nav">
          <div className="search">
            <button type="button">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
            <input
              type="search"
              name="resulit"
              id="results"
              placeholder="Search results here"
            />
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}

export default AdminResponses;
