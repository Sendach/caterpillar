import React from 'react'
import { useLocation } from 'react-router-dom';

import Button from '../components/Buttons/Button';
import styles from '../styles/accountCreated.module.scss';

const AccountCreated = ( ) => {
  const location = useLocation();

  return (
    <div className={styles.accountCreated}>
      <p className={styles.accountCreatedText}>
        You're almost done! We sent an activation mail to <span className={styles.accountCreatedEmail}>{location.state.email}</span>.
        Please follow the instructions in the mail to activate your account.
        <br /><br />
        If it doesn't arrive, check your spam folder.
      </p>
      <div className={styles.accountCreatedButtons}>
        <Button text="Resend Activation Email"></Button>
        <Button text="Change Email Address"></Button>
      </div>
    </div>
  )
}

export default AccountCreated