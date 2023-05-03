import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './view/pages/landing/Landing';
import Login from './view/pages/Login';
import SignUp from './view/pages/Signup';

import AdminDashboard from './view/pages/admin/dashboard/AdminDashboard';
// import Signup from './view/pages/Signup';
// import Button from './core/components/atoms/Button';
// import NavBar from './core/components/organisms/NavBar';

function App() {
  return (
    <div className="App">
      <div className="Appdiv">
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
