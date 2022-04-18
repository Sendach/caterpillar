import React from 'react';
import Button from '../Buttons/Button';
import styles from '../../styles/form.module.scss';

const ForgotPasswordForm = () => {

  const resetPassword = (event) => {
    event.preventDefault();

  }

  return (
    <div className={styles.logInFormContainer}>
      <div className={styles.form}>
        <div className={styles.formHeader}>
          <h3>Forgot your password?</h3>
          <p style={{textAlign: 'left', margin: '10px 0'}}>Please fill in your email or username and we will send you instructions on how to reset your password.</p>
        </div>
        <div className={styles.formInput}>
          <form onSubmit={resetPassword}>
            <input
              className={styles.input}
              value="Email / Username"
            />
          </form>
        </div>
        <div className={styles.formFooter}>
          <Button text="Reset Password"></Button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;