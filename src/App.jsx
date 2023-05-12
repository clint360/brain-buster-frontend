/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './view/pages/auth/Login';
import Landing from './view/pages/landing/Landing';
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
import ErrorPage from './view/pages/errorpages/ErrorPage';
import CreateQuiz from './view/pages/createQuiz/CreateQuiz';
// import Login from './view/pages/Login';

/* import Landing from './view/pages/landing/Landing'; */
// import AdminDashboard from './view/pages/admin/dashboard/AdminDashboard';
// import Signup from './view/pages/Signup';
// import Button from './core/components/atoms/Button';
// import NavBar from './core/components/organisms/NavBar';

function App() {
  const [userResponses, setUserResponses] = useState([]);
  const [questions, setQuestions] = useState(questionsModel);
  const [quizTaker, setQuizTaker] = useState({
    studentName: null,
    emailAddress: null,
  });

  return (
    <Provider
      value={{
        userResponses,
        setUserResponses,
        questions,
        setQuestions,
        quizTaker,
        setQuizTaker,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin">
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route
              path="/admin/quizzes/:quizName/:quizDuration"
              element={<AdminQuizzes />}
            />
            <Route path="/admin/responses" element={<AdminResponses />} />
            <Route path="/admin/createQuiz" element={<CreateQuiz />} />
          </Route>
          <Route path="/user">
            <Route
              path="/user/quiz/instructions/:userId/:userName/:quizName/:quizDuration"
              element={<Instructions />}
            />
            <Route
              path="/user/info/:userId/:quizName/:quizDuration"
              element={<UserInfo />}
            />
            {quizTaker.studentName ? (
              <>
                <Route path="/user/quiz">
                  <Route
                    index
                    path="/user/quiz/test/:userId/:quizName/:quizDuration"
                    element={<QuizPage />}
                  />
                </Route>
                <Route
                  path="/user/quiz/results/:quizName"
                  element={<UserResults />}
                />
              </>
            ) : (
              <Route path="*" element={<ErrorPage />} />
            )}
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
