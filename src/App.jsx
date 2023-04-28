/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './view/pages/auth/Login';
import Instructions from './view/pages/users/instructions/Instructions';
import UserInfo from './view/pages/users/userinfo/UserInfo';
import AdminDashboard from './view/pages/admin/dashboard/AdminDashboard';
import Signup from './view/pages/auth/Signup';
import AdminProfile from './view/pages/admin/profile/AdminProfile';
// import Login from './view/pages/Login';
// import Signup from './view/pages/Signup';
// import Button from './core/components/atoms/Button';
// import NavBar from './core/components/organisms/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin">
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/quizzes" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
