/* eslint-disable no-plusplus */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';
import './AdminResponses.css';
import { userResults } from '../../../../api/auth';
import Loading from '../../../../core/components/atoms/loading/Loading';

function AdminResponses() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  let num = 0;

  useEffect(() => {
    userResults().then(({ data }) => {
      setResults(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  /*  console.log(num); */

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
            <span>Quiz Name : </span>
            <span>All</span>
            {/* <select name="quizName" className="quizNameOptions" id="">
              <option value="">All</option>
              {results?.map((data) => {
                return (
                  <option key={data.id} value={data.quizName}>
                    {data.quizName}
                  </option>
                );
              })}
            </select> */}
          </div>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr className="header">
                <th className="cell">No</th>
                <th className="cell">Quiz Name</th>
                <th className="cell">Students Name</th>
                <th className="cell">Attempts</th>
                <th className="cell">Earned Points</th>
                <th className="cell">Result</th>
              </tr>
            </thead>
            <tbody>
              {results?.map((data) => {
                num += 1;
                return (
                  <tr className="student__result_table" key={data.id}>
                    <td className="cell">{num}</td>
                    <td className="cell">{data.quizName}</td>
                    <td className="cell">{data.studentName}</td>
                    <td className="cell">{data.attemps}</td>
                    <td className="cell">{data.earnPoints}</td>
                    <td className="cell">{data.quizResult}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AdminTemplate>
  );
}

export default AdminResponses;
