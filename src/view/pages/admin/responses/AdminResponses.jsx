import React from 'react';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';
import './AdminResponses.css';

function AdminResponses() {
  return (
    <AdminTemplate page="AdminResponses">
      <div className="result">
        <h1>Get student result here</h1>
        <div className="navbare">
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
          <div className="filter">
            <span>subject :</span>
            <p>Javascript</p>
          </div>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr className="header">
                <th className="cell">No</th>
                <th className="cell">Students Name</th>
                <th className="cell">Attempts</th>
                <th className="cell">Earned Points</th>
                <th className="cell">Result</th>
                <th className="cell">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="student__result_table">
                <td className="cell">1</td>
                <td className="cell">Bate Ashu</td>
                <td className="cell">3</td>
                <td className="cell">25</td>
                <td className="cell">Fail</td>
                <td className="cell">50%</td>
              </tr>
              <tr className="student__result_table">
                <td className="cell">2</td>
                <td className="cell">Joshua Tamfu</td>
                <td className="cell">2</td>
                <td className="cell">20</td>
                <td className="cell">Pass</td>
                <td className="cell">80%</td>
              </tr>
              <tr className="student__result_table">
                <td className="cell">3</td>
                <td className="cell">John Doe</td>
                <td className="cell">3</td>
                <td className="cell">30</td>
                <td className="cell">Pass</td>
                <td className="cell">90%</td>
              </tr>
              <tr className="student__result_table">
                <td className="cell">4</td>
                <td className="cell">Humphrey</td>
                <td className="cell">4</td>
                <td className="cell">35</td>
                <td className="cell">Pass</td>
                <td className="cell">70%</td>
              </tr>
              <tr className="student__result_table">
                <td className="cell">5</td>
                <td className="cell">Tom Taylor</td>
                <td className="cell">1</td>
                <td className="cell">10</td>
                <td className="cell">Fail</td>
                <td className="cell">20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminTemplate>
  );
}

export default AdminResponses;
