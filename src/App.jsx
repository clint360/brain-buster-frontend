/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './view/pages/auth/Login';
import Instructions from './view/pages/users/instructions/Instructions';
import UserInfo from './view/pages/users/userinfo/UserInfo';
import AdminDashboard from './view/pages/admin/dashboard/AdminDashboard';
import Signup from './view/pages/auth/Signup';
import AdminProfile from './view/pages/admin/profile/AdminProfile';
import AdminQuizzes from './view/pages/admin/quizzes/AdminQuizzes';
import AdminResponses from './view/pages/admin/responses/AdminResponses';
import QuizPage from './view/pages/users/quiz/QuizPage';
import UserResults from './view/pages/users/results/UserResults';
import { AppContext, Provider } from './core/data/Context';
import questionsModel from './core/data/questionsModel';
// import Login from './view/pages/Login';0
// import Signup from './view/pages/Signup';
// import Button from './core/components/atoms/Button';
// import NavBar from './core/components/organisms/NavBar';

function App() {
  const [userResponses, setUserResponses] = useState([]);
  const [questions, setQuestions] = useState(questionsModel);

  return (
    <Provider value={{ userResponses, setUserResponses, questions }}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin">
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/quizzes" element={<AdminQuizzes />} />
            <Route path="/admin/responses" element={<AdminResponses />} />
          </Route>
          <Route path="/user">
            <Route path="/user/instructions" element={<Instructions />} />
            <Route path="/user/info" element={<UserInfo />} />
            <Route path="/user/quiz">
              <Route index path="/user/quiz/test" element={<QuizPage />} />
            </Route>
            <Route path="/user/results" element={<UserResults />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
