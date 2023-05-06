/* eslint-disable no-unused-vars */
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
import CreateQuiz from './view/pages/createQuiz/CreateQuiz';
import Notfound from './core/components/notfound/Notfound';
// import Login from './view/pages/Login';
// import Signup from './view/pages/Signup';
// import Button from './core/components/atoms/Button';
// import NavBar from './core/components/organisms/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/admin">
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/quizzes" element={<AdminQuizzes />} />
          <Route path="/admin/createQuiz" element={<CreateQuiz />} />
          <Route path="/admin/responses" element={<AdminResponses />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
