import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import userService from './services/users.js';
import { Navbar } from './components/index';
import styles from './styles/globals.module.scss';
import { Home, Register, AccountCreated, Login, ForgotPassword } from './routes/index';

const App = () => {
  const [users, setUsers] = useState([]);
  const [signUpPopupForm, setSignUpPopupForm] = useState(false);

  const toggleSignUpPopUpForm = () => {
    setSignUpPopupForm(!signUpPopupForm);
  }

  useEffect(() => {
    userService
      .getAll()
      .then(users => {
      setUsers(users);
    })
  }, [])

  return (
    <div className={styles}>
      <Router>
        <Navbar toggleSignUpPopUpForm={toggleSignUpPopUpForm}/>
        <Routes>
          <Route path="/" element={<Home signUpPopupForm={signUpPopupForm}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-created" element={<AccountCreated />} />
          <Route path="/login/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
