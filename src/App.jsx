/* eslint-disable no-unused-vars */
import './App.css';
import Login from './view/pages/Login';
import Instructions from './view/pages/users/instructions/Instructions';
import UserInfo from './view/pages/users/userinfo/UserInfo';
import AdminDashboard from './view/pages/admin/dashboard/AdminDashboard';
// import Login from './view/pages/Login';
// import Signup from './view/pages/Signup';
// import Button from './core/components/atoms/Button';
// import NavBar from './core/components/organisms/NavBar';

function App() {
  return (
    <div className="App">
      <div className="Appdiv">
        <AdminDashboard />
      </div>
    </div>
  );
}

export default App;
