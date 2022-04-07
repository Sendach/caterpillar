
import styles from '../../../styles/popup.module.scss';
import SignUpForm from '../SignUpForm';

const SignUpPopup = () => {
  return (
    <div className={styles.signUpPopup}>
      <div className={styles.som}>
        <SignUpForm />
      </div>

    </div>
  );
}

export default SignUpPopup;