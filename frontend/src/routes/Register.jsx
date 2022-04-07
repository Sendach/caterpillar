import React from 'react'
import SignUpForm from '../components/Forms/SignUpForm';
import styles from '../styles/form.module.scss';

const Register = () => {
  return (
    <div className={styles.formContainer}>
    <div>
      <SignUpForm />
    </div>

  </div>
  );
}

export default Register;