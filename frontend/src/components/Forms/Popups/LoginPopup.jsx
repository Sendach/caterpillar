import react, { useEffect, useState } from 'react';
import styles from '../../../styles/popup.module.scss';
import userService from '../../../services/users.js';

const LoginPopup = () => {
  const [userLogin, setUserLogin] = useState({ name: '', password: '' });

  const handleLoginChange = (event) => {
    const value = event.target.value;
    console.log(value)
    setUserLogin({
      ...userLogin,
      [event.target.name]: value
    });
  }

  const authenticateUser = (event) => {
    event.preventDefault();
    console.log('Authenticating user');
  }

  return (
    <div className={styles.popup}>
      <form onSubmit={authenticateUser} className={styles.login}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={userLogin.name}
          onChange={handleLoginChange}
        />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          value={userLogin.password}
          onChange={handleLoginChange}
        />
        <button type="submit">Login</button>
      </form> 
    </div>
  );
}

export default LoginPopup;