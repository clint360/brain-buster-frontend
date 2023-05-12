/* eslint-disable react/prop-types */
import React from 'react';
import AdminQuizCard from '../../../../core/components/atoms/AdminQuizCard';
import AnalyticsCard from '../../../../core/components/atoms/AnalyticsCard';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';
import './AdminDashboard.css';
import AuthGuard from '../profile/AuthGuard';

function AdminDashboard({ user }) {
  return (
    <AdminTemplate
      text="Here is your Dashboard, a place where you can view your analytics
    and activity summary"
      username={user.fullName}
      page="AdminDashboard"
    ><div className="createnewquiz">
        <div>
          <i className="fa-sharp fa-solid fa-circle-plus fa-bounce" />
          <div>Create New Quiz</div>
        </div>
      </div>
      <div className="analytics" />
      <div className="displayquizzes">
        <h1>Analytics</h1>
        <div className="quizzesslides">
          <div>
            <AnalyticsCard
              title="Total Number of Responses"
              number="23"
              backgroundGradient={() => {
                return generate();
              }}
            />
          </div>
          <div>
            <AnalyticsCard
              title="Total Number of Responses"
              number="23"
              backgroundGradient={() => {
                return generate();
              }}
            />
          </div>
        </div>
      </div>
      <div className="displayquizzes">
        <h1>Your Quizzes</h1>
        <div className="quizzesslides">
          <div>
            <AdminQuizCard quizName="F2 Biology Paper1" />
          </div>
          <div>
            <AdminQuizCard quizName="F2 Biology Paper1" />
          </div>
          <div>
            <AdminQuizCard quizName="F2 Biology Paper1" />
          </div>
          <div>
            <AdminQuizCard quizName="F2 Biology Paper1" />
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}

export default AuthGuard(AdminDashboard);
