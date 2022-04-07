import React from 'react';
import LoginForm from '../components/Forms/LoginForm';
import styles from '../styles/form.module.scss';

const Login = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.keklmao}>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;