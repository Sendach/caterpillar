import react, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/form.module.scss';
import userService from '../../services/users.js';
import Button from '../Buttons/Button';

const LoginForm = () => {
  let navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({ login: '', password: '' });
  const [incorrectLogin, setIncorrectLogin] = useState(false);

  const handleLoginChange = (event) => {
    const value = event.target.value;
    console.log(value)
    setUserLogin({
      ...userLogin,
      [event.target.name]: value
    });
  }

  const authenticateUser = async (event) => {
    event.preventDefault();
    
    userLogin.login = userLogin.login.toLowerCase();

    try {
      const user = await userService.getUserByUsername(userLogin.login);
      if (user.password === userLogin.password) {
        console.log('Successfully logged in via Username.');
        setUserLogin({ login: '', password: '' });
        navigate('/');
      } else throw new Error('Incorrect password');
    } catch (error) {
      try {
        const user = await userService.getUserByEmail(userLogin.login);
        if (user.password === userLogin.password) {
          console.log('Successfully logged in via Email.');
          setUserLogin({ login: '', password: '' });
          navigate('/');
        } else throw new Error('Incorrect password');
      } catch (error) {
        setIncorrectLogin(true);
      }
    }
  }

  return (
    <div className={styles.formContainer}>
      {incorrectLogin && <div className={styles.incorrectLogin}>Incorrect username, email or password</div>}
      <div className={styles.form}>
        <div className={styles.formHeader}>
          <h1>Welcome back!</h1>
          <p>Let's get you logged in</p>
        </div>
        <div className={styles.formInput}>
          <form>
            <input
              type="text"
              name="login"
              value={userLogin.login}
              onChange={handleLoginChange}
              placeholder="Email / Username"
            />
            <input
              type="text"
              name="password"
              value={userLogin.password}
              onChange={handleLoginChange}
              placeholder="Password"
            />
          </form>
          <Link to="/login/forgot-password" className={styles.forgotPassword}>I forgot my password</Link>
          <div className={styles.signUpFormFooter}>
            <Button text="Log In" onClick={authenticateUser}></Button>
            <Link to="/register"><Button text="Create Account"></Button></Link>
          </div> 
        </div>
      </div>
    </div>


  );
}

export default LoginForm;